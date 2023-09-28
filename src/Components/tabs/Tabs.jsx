import React, { useState } from "react";
import "./tabs.css";
import hyveWallet from "../../assets/create.png";
import hyveCoin from "../../assets/swap.png";
import hyveSend from "../../assets/send.png";
import hyveShare from "../../assets/cost.png";
import hyveCash from "../../assets/swfit.png";
import hyveSD from "../../assets/hyveSD.png";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabindex) => {
    setActiveTab(tabindex);
  };
  return (
    <div className="tabs">
      <div className="tab_controller">
        <div
          className={`tab ${activeTab === 1 ? "actives" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          <p className="sendMoney">How?</p>
        </div>
        <div
          className={`tab ${activeTab === 2 ? "actives" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          <p className="sendMoney">Why?</p>
        </div>
      </div>
      <div className="tab_content">
        {activeTab === 1 && (
          <div className="tab1">
            <p className="tab1_header">
              {" "}
              Envision the transformation of local currencies into digital{" "}
              <br />
              assets, uniting over 20+ African nations in a pioneering financial
              evolution.
            </p>

            <div className="choose_section">
              <div className="choose1">
                <div className="choose_circle">
                  <img
                    width={60}
                    height={60}
                    src={hyveWallet}
                    alt="hyveWallet"
                  />
                </div>
                <h3 className="fast">
                  <span style={{ color: "#2e8040" }}>Create your account</span>
                </h3>
                <p>
                  Create your account on swapxpress which is easy, simple and
                  fast.
                </p>
              </div>
              <div className="choose1">
                <div className="choose_circle">
                  <img width={60} height={60} src={hyveCoin} alt="hyveCoin" />
                </div>
                <h3 className="safe">
                  <span style={{ color: "#2e8040" }}>
                    Swap your local currency
                  </span>
                </h3>
                <p>
                  Swap your fiat currency for a diverse range of crypto assets.
                  {/* <br /> */}
                </p>
              </div>
              <div className="choose1 ">
                <div className="choose_circle">
                  <img width={60} height={60} src={hyveSend} alt="hyveSend" />
                </div>
                <h3 className="transp">
                  <span style={{ color: "#2e8040" }}>Send</span>
                </h3>
                <p>Absolutely hassle-free! Swap funds and more with ease.</p>
              </div>
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div className="tab2">
            <p className="tab2_header">
              Imagine a future where receiving funds effortlessly spans across{" "}
              <br />
              more than 20+ African countries, creating a visionary financial
              landscape.
            </p>
            <div className="choose_section">
              <div className="choose1">
                <div className="choose_circle">
                  <img width={60} height={60} src={hyveShare} alt="hyveShare" />
                </div>
                <h3 className="fast">
                  <span style={{ color: "#2e8040" }}>Cost Savings</span>
                </h3>
                <p>
                  You can share your unique ID with the sender, and <br />
                  have then fund your Hyve account
                </p>
              </div>
              <div className="choose1">
                <div className="choose_circle">
                  <img width={60} height={60} src={hyveCash} alt="hyveCash" />
                </div>
                <h3 className="safe">
                  <span style={{ color: "#2e8040" }}>Swift Conversions</span>
                </h3>
                <p>
                  The sender sends the needed USDT to your <br />
                  Hyve account
                </p>
              </div>
              <div className="choose1 ">
                <div className="choose_circle">
                  <img src={hyveSD} alt="hyveSD" />
                </div>
                <h3 className="transp">
                  <span style={{ color: "#2e8040" }}>Competitive Fees:</span>
                </h3>
                <p>
                  You can withdraw the funds from your Hyve <br />
                  account to your local bank account easily{" "}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
