import React,  { useRef }from 'react'
import './Contact.css'
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
 
  const notify = () => toast("Wow so easy !");
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_nnumsqs","template_nlqzrsa",
          form.current,
          "L1nXwHkN6KpTJN_Uv"
        )
        .then(
          (result) => {
            <ToastContainer />
            console.log(result.text);
            console.log("message sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
    };

  return(
  <div className="contact" id="contact">
    <div className="footer-left">
      <h1>
        Thank You
      </h1>

      <p className="footer-text" style={{marginTop:"150px"}}>&copy; 2026 Danish Jamari</p>
    </div>
    <div className="footer-right">
      <h3>I'M ALWAYS INTERESTED ABOUT</h3>
      <div className="interests">
        <p>Multimedia</p>
        <p>Video Editing</p>
        <p>Mobile Development</p>
        <p>Flutter</p>
        <p>UI/UX Design</p>
        <p>Content Creating</p>
      </div>

      <hr />

      <div className="social-icons">
        <a
          href="http://www.youtube.com/@Yuirist"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-youtube" />
        </a>
        <a
          href="https://instagram.com/_dnishj/profilecard/?igsh=bXU3cjkwdHprbWVt"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-instagram" />
        </a>
      </div>

      <hr />
    </div>
  </div>
  )
}

export default Contact
