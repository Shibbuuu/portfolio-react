import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import arrow_icon from "../../assets/arrow_icon.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b6e16da5-6952-406e-a00b-2c382e566a46");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
          Hi, I'm Shiv Singh, a passionate frontend developer. As a fresher, I've already completed numerous projects using technologies like React, JavaScript, TypeScript, Node.js, MongoDB, and MySQL. I absolutely love creating projects and learning new things along the way.

          Currently, I'm on the lookout for job opportunities where I can contribute my skills and grow professionally. I amm a hardworking individual who is committed to delivering high-quality work and staying loyal to the companies I work with.Let’s build something amazing together!
          
          
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>shveesingh@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>412, Vaishali, Sector 5, <br />Ghaziabad, Uttar Pradesh</p>
            </div>

            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>(+91)</p><p>7398309219</p>
            </div>
          </div>
        </div>
        <div className="contact-rights">
          <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your name</label>
            <input type="text" placeholder="Enter your name" name="name" />
            <label htmlFor="">Your email</label>
            <input type="email" name="email" placeholder="Enter your email" />
            <label htmlFor="">Write your message here</label>
            <textarea
              name="message"
              rows={8}
              placeholder="Enter your message"
            ></textarea>
            <button type="submit" className="contact-submit">
              Submit now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
