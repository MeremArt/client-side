import React from "react";
import "./section2.css";
import clock from "../../assets/fast-time.png";
import padlock from "../../assets/transparency.png";
import shield from "../../assets/shield.png";

const Section2 = () => {
  return (
    <div className="second_section">
      <div className="second_section_header">
        <h3>Why SwapXpress ?</h3>
        <p>
          We harness the power of blockchain innovation to streamline and
          expedite the process of converting your local currency into
          cryptocurrency, offering both security and cost-efficiency,
          particularly for smaller amounts. Our commitment to revolutionizing
          currency exchanges ensures a seamless experience for all your digital
          asset needs.
        </p>
      </div>

      <div className="choose_section">
        <div className="choose1">
          <div className="choose_circle">
            <img src={clock} alt="clock" width={60} height={60} />
          </div>
          <h3 className="fast">Fast</h3>
          <p>
            Experience seamless transactions, which bridges the wide gap between
            different currencies
          </p>
        </div>
        <div className="choose1">
          <div className="choose_circle">
            <img src={shield} alt="padlock" width={50} height={50} />
          </div>
          <h3 className="safe">Safe</h3>
          <p>
            Your funds are securely transferred using <br />
            cryptographic protocols, providing you with <br />
            the peace of mind you deserve.
          </p>
        </div>
        <div className="choose1 ">
          <div className="choose_circle">
            <img src={padlock} alt="shield" width={50} height={50} />
          </div>
          <h3 className="transp">Transparent</h3>
          <p>
            Each transfer is recorded on the blockchain, <br />
            creating an immutable and auditable trail of <br />
            the funds' journey.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
