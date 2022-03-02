import React, { useState } from "react";
import '../Contact/Contact.css'

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div className='page'>
      <div className='text'>
        <h1> Trade Standards </h1>
        <h4>Plan, Design, And Build With Professionals & Experts In Kitchen Remodeling.</h4>
        <p>Enjoy Complete Kitchen Remodeling with Trade Standards Services. Stylish, Elegant Kitchen Plans & Designs Best Suited For That Focal Spot In Your Home. Where Family Meals & Memories Are Made.</p>
        <form
          className="form"
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
          
          >
          <div >
            <input type="text" placeholder="Your name" name="name" required />
          </div>
          <div>
            <input type="email" placeholder="Email" name="email" required />
          </div>
          <div>
            <textarea placeholder="Your message" name="message" required />
          </div>
          <div>
            <button type="submit"> Send a message </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;