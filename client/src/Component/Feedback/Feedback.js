import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./Feedback.css";

const Feedback = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vl50log', 'template_w4vjgsi', 
    form.current, 
    'user_3dTNFCK33TXvL6AiOJJGl')
      .then((result) => {
          alert("Your Valuabel Feedback has been sucessfully send! 👍")
      }, (error) => {
        alert(error.message);
      });
    e.target.reset()
  };

  return (
    <div>
    <div class="feedback_new">
      <div class="feedback__content">
        <h1 className="animate-hero">Feedback Form</h1>
      </div>
    </div>
    <div className="container">
          <div className="contact-box">
              <div className="left"></div>
              <div className="right">
                  <form ref={form} onSubmit={sendEmail}>
                      <h2 className='contact_head'>Feedback Form</h2>
                      <input type="text" name="name" class="field" placeholder="Your Name" autoComplete="off"/>
                      <input type="email" name="user_email" class="field" placeholder="Your Email" autoComplete="off"/>
                      <textarea placeholder="Message" name="message" class="field"></textarea>
                      <button className="btn">Send</button>
                  </form>
              </div>
          </div>
      </div>
  </div>
  );
};

export default Feedback;
