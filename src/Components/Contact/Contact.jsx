import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_sfsfl6s', 'template_s6wyyp9', form.current, {
        publicKey: '653vSQw-IllGaimre',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div id="contact">
      <div id="contact-text">
        <h1>
          Explore the Digital Frontier? 🚀 Let's Turn Your Dreams into Digital
          Delights! ✨
        </h1>
        <h4>
          Reach out today, and let's craft a plan to turn your dreams into
          reality!
        </h4>
      </div>
      <div id="contact-btns">
        <div className="contact-btn">
          Ignite the Connection<i className="ri-arrow-right-up-line"></i>
        </div>
      </div>
      <form id="contact-form" onSubmit={sendEmail} ref={form}>
        <div id="contact-part1">
          <div className="label">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="label">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleInputChange}
          required
        />
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleInputChange}
          required
        ></textarea>
        <button type="submit" onClick={sendEmail} value="Send">Send</button>
      </form>
    </div>
  );
}

export default Contact;
