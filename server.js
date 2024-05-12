const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const API_PORT = process.env.PORT || 5000;
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Create transporter for sending emails
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'beniauskiukas@gmail.com',
    pass: '', // Be careful with sensitive information
  },
});

// Endpoint to send an email
app.post('/send-email', (req, res) => {
  const { name, surname, email, phoneNumber, contactTime, message } = req.body;
    console.log(name);
  
  const mailOptions = {
    from: 'beniauskiukas@gmail.com',
    subject: "Kupiskio Mariu Vilos Uzklausa",
    to: "valintelisb@gmail.com",
    text:
     `${name} ${surname}
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
