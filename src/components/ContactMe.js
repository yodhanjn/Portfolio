import React from 'react';
import './ContactMe.css';

const ContactMe = () => {
  return (
    <section className="contact-me">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:trishul7272@gmail.com">trishul7272@gmail.com</a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{' '}
          <a href="#" target="_blank" rel="noopener noreferrer">
            Profile
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{' '}
          <a href="#" target="_blank" rel="noopener noreferrer">
            Repository
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactMe;