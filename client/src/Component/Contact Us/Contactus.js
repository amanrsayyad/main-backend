import React, { useEffect, useRef } from "react";
import "./Contactus.css";
import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from '@emailjs/browser';

const Contactus = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_17za56c', 'template_iisdovi', 
    form.current, 
    'user_3dTNFCK33TXvL6AiOJJGl')
      .then((result) => {
          alert("Message has been sucessfully send! 👍")
      }, (error) => {
        alert(error.message);
      });
    e.target.reset()
  };


  return (
    <div>
      <div data-aos="flip-left" className="contact-in contact">
        <div className="contact_container">
          <div className="contact_card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.903361028676!2d73.68356281488408!3d17.936660787751634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2650777f22b8d%3A0x4b91a75edcf2042a!2sLa%20Serene%20Resort%20%26%20Spa!5e0!3m2!1sen!2sin!4v1640597349509!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>

          <form className="contact_card" ref={form} onSubmit={sendEmail}>
            <h2 className="contact_h2">Connect With Us</h2>

            <input
              className="text field"
              placeholder="Enter Your Name"
              autoComplete="off"
              type="text"
              name="name"
              required
              name="user_name"
            />
            <input
             id="email"
             type="email"
              className="text field"
              placeholder="Enter Your Email'Id"
              autoComplete="off"
              required
              name="user_email"
            />
            <textarea
              id="message"
              placeholder="Message"
              className="field textarea"
              autoComplete="off"
              required
              type="text"
              name="message"
            ></textarea>

            <button className="btn_contact" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
