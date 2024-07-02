// Location.js
import React from 'react';
import './Location.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

function Location() {
    return (
        <div>
            <NavBar />
            <div className="iframe-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2239.253378115197!2d24.979793877110975!3d55.85827018386244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e870daaaaaaaab%3A0xb887bea4b4fccea0!2zS3VwacWha2lvIG1hcmnFsyB2aWxh!5e0!3m2!1slt!2slt!4v1714936133704!5m2!1slt!2slt&z=12"
                    height="900"
                    style={{ border: "0", width: "100%" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <Footer />
        </div>
    );
}

export default Location;
