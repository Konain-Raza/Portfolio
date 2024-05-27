import React, { useRef, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    const serviceId = "service_sfsfl6s";
    const templateId = "template_s6wyyp9";
    const publicId = "653vSQw-IllGaimre";
    const data = new FormData(e.target);
    const emailFormat = {
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
    };
    emailjs
      .send(serviceId, templateId, emailFormat, publicId)
      .then(() => {
        toast.success("Email successfully sent!");
      })
      .catch((error) => {
        toast.error(`Oh no! There was an error. ${error}`);
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
        <button className="contact-btn">
          <span className="text">Ignite the Connection</span>
          <i className="ri-arrow-right-up-line"></i>
          <span className="shimmer"></span>
        </button>
      </div>
      <form id="contact-form" onSubmit={sendEmail}>
        <div id="contact-part1">
          <div className="label">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
          </div>
          <div className="label">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
        </div>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject"
          required
        />
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          required
        ></textarea>
        <button type="submit" id="email-send">
          Send
        </button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </div>
  );
};

export default Contact;
