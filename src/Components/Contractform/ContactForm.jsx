import React, { useState } from "react";
import "./Contract.css"; // Import your CSS file

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // const firebaseConfig = {
  //   apiKey: "AIzaSyB80mx7dC6XPrbd5yQzAIAajWW70bFAl-w",
  //   authDomain: "collegely-dl-waitlist.firebaseapp.com",
  //   projectId: "collegely-dl-waitlist",
  //   storageBucket: "collegely-dl-waitlist.appspot.com",
  //   messagingSenderId: "459988066650",
  //   appId: "1:459988066650:web:ddabe0958a08a19378d363",
  //   measurementId: "G-YVTJJ3RLYR",
  // };

  // const app = initializeApp(firebaseConfig);
  // const db = getFirestore();

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const myCollection = collection(
      db,
      "Website",
      "Contacts",
      formData["email"]
    );

    try {
      const docRef = await addDoc(myCollection, formData);
      alert("your response has been submitted✅. We will get in touch shortly");
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert("An error occured, Please try again later.");
    }
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={""}>
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            onChange={""}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            onChange={""}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            onChange={""}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            onChange={""}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
