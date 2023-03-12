import React from 'react';
import './Contact.css'

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>If you would like to get in touch with me, please fill out the form below or send me an email at [Your Email Address].</p>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
