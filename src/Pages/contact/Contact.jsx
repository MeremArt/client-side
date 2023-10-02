import React from "react";
import "./Contact.css";
import LandingPageHeader from "../../Components/LandingPageHeader/LandingPageHeader";
import ContactForm from "../../Components/Contractform/ContactForm";
import Footer from "../../Components/footer/Footer";
import Isus from "../../assets/contact.svg";
const Contact = () => {
  return (
    <section className="doam">
      <LandingPageHeader />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <main className="Wrongx doam">
        <section className="flexit doam">
          <div className=" contacttext ">
            <img
              src={Isus}
              className="imgconta"
              width={600}
              height={400}
              alt="illustration"
            />
            <br />
            {/* <h2>Your feedback matters. Reach out to us now.</h2> */}
            <p>
              We're excited to connect with you! Whether you've got burning
              questions, want to explore potential partnerships, or just want to
              brighten our day with a friendly 'hello,' please don't hesitate to
              reach out. Our team is here with open arms and a warm welcome to
              assist you in any way we can.
            </p>
          </div>
          <div className="contit">
            <ContactForm />
          </div>
        </section>
      </main>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </section>
  );
};

export default Contact;
