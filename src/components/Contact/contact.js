import React, { useRef } from "react";
import "./contact.css";
import Walmart from "../../assets/walmart.png";
import Adobe from "../../assets/adobe.png";
import Microsoft from "../../assets/microsoft.png";
import Facebook from "../../assets/facebook.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YoutubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_13u7pk2",
        "template_zjs355e",
        form.current,
        "r_bvB52YlRUFI7SQ9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ex
          veritatis beatae sapiente, totam voluptate, et magnam autem ad,
          reprehenderit porro saepe iste nulla. In eum animi aliquid quis
          excepturi?
        </p>
        <div className="clientImgs">
          <img src={Walmart} className="clientImg" />
          <img src={Adobe} className="clientImg" />
          <img src={Microsoft} className="clientImg" />
          <img src={Facebook} className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias
          dicta a, laudantium illum amet blanditiis, suscipit exercitationem
          accusamus, sit facilis illo. Officiis, voluptatem. Possimus
          accusantium incidunt at odio culpa!
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="from_name" />
          <input type="email" className="email" placeholder="Your Email" name="from_email" />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={FacebookIcon} className="link" />
            <img src={TwitterIcon} className="link" />
            <img src={YoutubeIcon} className="link" />
            <img src={InstagramIcon} className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
