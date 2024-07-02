const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const mysql = require('mysql');
const moment = require('moment');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const session = require('express-session');

const API_PORT = process.env.PORT || 5000;
const app = express();
const secretKey = 'your_secret_key';

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(session({
    secret: secretKey,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'mysqlbenas',
  database: 'kupiskiomariuvila'
};

const connection = mysql.createConnection(dbConfig);

connection.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database');
});

// Create admin user (one-time setup, then comment out or remove this section)
app.post('/create-admin', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO admins (username, password) VALUES (?, ?)';
    connection.query(query, [username, hashedPassword], (err, results) => {
        if (err) {
            console.error('Error creating admin:', err);
            res.status(500).send(err);
            return;
        }
        res.send('Admin created');
    });
});

// Login route
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM admins WHERE username = ?';
    connection.query(query, [username], async (err, results) => {
        if (err) {
            console.error('Error fetching admin:', err);
            res.status(500).send(err);
            return;
        }
        if (results.length === 0) {
            return res.status(401).send('Invalid credentials');
        }
        const admin = results[0];
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).send('Invalid credentials');
        }
        const token = jwt.sign({ id: admin.id }, secretKey, { expiresIn: '1h' });
        req.session.token = token;
        res.send({ token });
    });
});

// Middleware to check if the user is authenticated
const authenticate = (req, res, next) => {
    const token = req.session.token;
    if (!token) {
        return res.status(401).send('Access denied');
    }
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).send('Invalid token');
        }
        req.adminId = decoded.id;
        next();
    });
};

// Example of a protected route
app.get('/api/protected', authenticate, (req, res) => {
    res.send('This is a protected route');
});

// Endpoint to fetch blocked dates
app.get('/api/blocked-dates', (req, res) => {
  const { house } = req.query;
  console.log(`Fetching blocked dates for house: ${house}`);
  const query = 'SELECT date FROM blocked_dates WHERE house = ?';
  connection.query(query, [house], (err, results) => {
    if (err) {
      console.error('Error fetching blocked dates:', err);
      res.status(500).send(err);
      return;
    }
    res.send(results.map(row => ({ date: moment(row.date).format('YYYY-MM-DD') })));
  });
});

// Endpoint to fetch booked ranges
app.get('/api/booked-ranges', (req, res) => {
  const { house } = req.query;
  let query = 'SELECT house, start_date, end_date FROM bookings';
  const queryParams = [];

  if (house) {
    query += ' WHERE house = ?';
    queryParams.push(house);
  }

  console.log(`Fetching booked ranges for house: ${house || 'all houses'}`);
  
  connection.query(query, queryParams, (err, results) => {
    if (err) {
      console.error('Error fetching booked ranges:', err);
      res.status(500).send(err);
      return;
    }
    console.log('Fetched booked ranges from DB:', results);
    res.send(results.map(row => ({
      house: row.house,
      start_date: moment(row.start_date).format('YYYY-MM-DD'),
      end_date: moment(row.end_date).format('YYYY-MM-DD')
    })));
  });
});

// Endpoint to fetch booking information
app.get('/api/booking-info', (req, res) => {
  const { date } = req.query;
  console.log(`Fetching booking info for date: ${date}`);
  const query = 'SELECT * FROM bookings WHERE ? BETWEEN start_date AND end_date';
  connection.query(query, [date], (err, results) => {
    if (err) {
      console.error('Error fetching booking info:', err);
      res.status(500).send(err);
      return;
    }
    res.send(results);
  });
});

// Endpoint to save a booking
app.post('/api/book', (req, res) => {
  const { house, startDate, endDate, name, surname, phone, email, message } = req.body;
  console.log(`Booking request for house: ${house} from ${startDate} to ${endDate}`);
  const query = 'INSERT INTO bookings (house, start_date, end_date, name, surname, phone, email, message) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  connection.query(query, [house, startDate, endDate, name, surname, phone, email, message], (err, results) => {
    if (err) {
      console.error('Error confirming booking:', err);
      res.status(500).send(err);
      return;
    }
    res.send(results);
  });
});

// Endpoint to update a booking
app.post('/api/update-booking', (req, res) => {
  const { house, originalStartDate, originalEndDate, newStartDate, newEndDate, name, surname, phone, email, message } = req.body;
  console.log(`Updating booking for house: ${house} from ${originalStartDate}-${originalEndDate} to ${newStartDate}-${newEndDate}`);

  // Check for conflicts with other bookings or blocked dates
  const checkConflictQuery = `
    SELECT * FROM bookings
    WHERE house = ?
    AND (
      (start_date <= ? AND end_date >= ?)
      OR (start_date <= ? AND end_date >= ?)
      OR (start_date >= ? AND end_date <= ?)
    )
    AND NOT (start_date = ? AND end_date = ?)
  `;
  connection.query(checkConflictQuery, [house, newStartDate, newEndDate, newStartDate, newEndDate, newStartDate, newEndDate, originalStartDate, originalEndDate], (err, results) => {
    if (err) {
      console.error('Error checking for conflicts:', err);
      res.status(500).send(err);
      return;
    }
    if (results.length > 0) {
      res.status(409).send({ message: 'Selected range conflicts with existing bookings or blocked dates.' });
      return;
    }

    const updateQuery = `
      UPDATE bookings 
      SET start_date = ?, end_date = ?, name = ?, surname = ?, phone = ?, email = ?, message = ?
      WHERE house = ? 
      AND start_date = ? 
      AND end_date = ?
    `;
    connection.query(updateQuery, [newStartDate, newEndDate, name, surname, phone, email, message, house, originalStartDate, originalEndDate], (err, results) => {
      if (err) {
        console.error('Error updating booking:', err);
        res.status(500).send(err);
        return;
      }
      res.send(results);
    });
  });
});

// Endpoint to delete a range
app.post('/api/delete-range', (req, res) => {
  const { house, startDate, endDate } = req.body;
  console.log(`Deleting booking range for house: ${house} from ${startDate} to ${endDate}`);
  const query = 'DELETE FROM bookings WHERE house = ? AND start_date = ? AND end_date = ?';
  connection.query(query, [house, startDate, endDate], (err, results) => {
    if (err) {
      console.error('Error deleting range:', err);
      res.status(500).send(err);
      return;
    }
    res.send(results);
  });
});

// Create transporter for sending emails
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'beniauskiukas@gmail.com',
    pass: '', // Be careful with sensitive information
  },
});

app.post('/send-email', (req, res) => {
  const { name, surname, email, phoneNumber, contactTime, message } = req.body;
  console.log(name);

  const mailOptions = {
    from: 'beniauskiukas@gmail.com',
    subject: "Kupiskio Mariu Vilos Uzklausa",
    to: "valintelisb@gmail.com",
    text: `${name} ${surname}
      ,,${message}"
      Kontaktai:
      Tel. Nr.: ${phoneNumber}
      El. paštas.: ${email}
      Skambinant telefonu susisiekti ${contactTime}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email', error });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ message: 'Email sent successfully', info });
    }
  });
});

// Start server
app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
