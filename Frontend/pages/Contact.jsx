import React, { useState } from "react";
import "../styles/Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_q765ta9",
        "template_pfx2ecb",
        formData,
        "09NqdYDevBWcdlaCf"
      )
      .then(
        () => {
          alert("Thanks for reaching out! I’ll get back to you soon. ♟️");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error);
          alert(`Ah shit! Something went wrong`);
        }
      );
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          value={formData.name}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
          value={formData.email}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          onChange={handleChange}
          value={formData.message}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
