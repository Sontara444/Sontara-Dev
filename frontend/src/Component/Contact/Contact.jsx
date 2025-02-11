import React from 'react'
import './Contact.css'
// import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <>
    
     <section className="contact" id="contact-footer" >
     <h2 className="contact-head">Contact</h2>
     <span><p className="contact-sub-head">Get In Touch!</p></span>
     {/* <span><p className="contact-sub-head">Feel free to Contact me by submitting the form below and i will get back to you as soon as possible.</p></span> */}
     
      <div className="contact-container container">
        
         <div className="contact-left">
          
         </div>
     
      <div className="form-container">
        <form action="https://formspree.io/f/xbjnjqyn" className="contact-form" method="POST">
            <input type="hidden"  name="form-name" value="form 1"/>
            <div className="contact-form-field">
              <label className="contact-form-label" htmlFor="name">Name</label>
              <input required placeholder="Enter your Name" type="text" className="contact-form-input" name="name" id="name"/>
            </div>
            <div className="contact-form-field">
              <label className="contact-form-label" htmlFor="email">Email</label>
              <input required placeholder="Enter your Email" type="text" className="contact-form-input" name="email" id="email"/>
            </div>
            <div className="contact-form-field">
              <label className="contact-form-label" htmlFor="message">Message</label>
             <textarea required  cols="30" rows="10" className="contact-form-input" placeholder="Enter Your Message" name="message" id="message"></textarea>
          
            </div>
            <button className="contact-button btn " value="send" type="submit">Submit</button>
        </form>
      </div>
    </div>
    
    </section>
   
    
    </>
  
  )
}

export default Contact
