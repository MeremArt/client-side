import React, { useState } from "react";
import "./section8.css";
import { Button } from "../button/button";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
const Section8 = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send the email to your server)
    console.log("Email submitted:", email);
    // Reset the input field
    window.alert("Thank you for subscribing to our newsletter!");
    setEmail("");
  };

  return (
    <div className="eight_section">
      <div className="vodo">
        <h3>Stay in the loop, join our newsletter</h3>
        <p className="des">
          Are you ready to be part of something special? Our newsletter is your{" "}
          <br />
          Ready to stay ahead in the world of digital currencies? By joining the
          <br /> SwapXpress newsletter, you'll unlock a realm of valuable <br />
          insights, real-time updates, and exclusive offers!.
          <br />
        </p>

        <p className="fyt">
          With our platform, you can effortlessly send and receive payments
          across borders, enabling you to explore new markets and seize
          international opportunities, don't let borders hold you back any
          longer. It's time to break free and experience the power of seamless
          cross-border transactions.
        </p>
        <div className="newsletter-form-container">
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                className="inputclass"
                onChange={handleEmailChange}
              />
              <button className="btninput" type="submit">
                <FaEnvelope className="email-icon" size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Section8;
