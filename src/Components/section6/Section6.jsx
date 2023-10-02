import React from "react";
import "./section6.css";
import cryptosupportemoji from "../../assets/cryptosupportemoji.png";
import cryptosupportotheremoji from "../../assets/cryptosupportotheremoji.png";
import Transparencyemoji from "../../assets/transparencyemoji.png";
import transparencyothersemoji from "../../assets/transparencyothersemoji.png";
import userinterfaceemoji from "../../assets/userinterfaceemoji.png";
import withdrawaltolocalemoji from "../../assets/withdrawaltolocalemoji.png";
import withdrawalemoji from "../../assets/withdrawalemoji.png";

const Section6 = () => {
  return (
    <div className="sixth_section">
      <div className="alt_sixth">
        <div className="main_sixth">
          <h3>Want to know more about all we do?</h3>

          <p className="expp">
            Experience the next-generation remittance platform that leverages
            the power of blockchain technology to <br />
            revolutionize cross-border transactions, enjoy a seamless and secure
            remittance experience that is faster, more <br />
            cost-effective, and highly transparent.
          </p>
          {/* 
          <div className="boobs">
            <p className="espp">
              Experience the next-generation remittance platform that leverages
              the power of blockchain technology to revolutionize cross-border
              transactions, enjoy a seamless and secure remittance experience
              that is faster, more cost-effective, and highly transparent.
            </p>
          </div> */}

          <div className="titties"></div>
          <div className="table">
            <div className="col1">
              <div className="col1_head"></div>
              <div className="padded">
                <p>Fees</p>
                <p>Flexibility</p>
                <p>Transparency</p>
                <p>Cost Efficiency</p>
              </div>
            </div>
            <div className="col2">
              <div className="col1_head">
                <p className="yve">SwapXpress</p>
              </div>
              <div className="paddedd">
                <p>1.8%</p>

                <p>
                  <img
                    src={Transparencyemoji}
                    style={{
                      width: "22px",
                      height: "22px",
                      marginTop: "-10px",
                      left: "39px",
                    }}
                  />
                </p>
                <p>
                  <img
                    src={withdrawalemoji}
                    style={{
                      width: "22px",
                      height: "22px",
                      marginTop: "-15px",
                      left: "39px",
                    }}
                  />
                </p>
                <p>
                  <img
                    src={cryptosupportotheremoji}
                    style={{
                      width: "22px",
                      height: "22px",
                      marginTop: "-15px",
                      left: "39px",
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="col3">
              <div className="col1_head">
                <p className="yve">Others</p>
              </div>
              <div className="paddedd">
                <p>2% - 14%</p>

                <p>
                  <img
                    src={transparencyothersemoji}
                    style={{
                      width: "22px",
                      height: "22px",
                      marginTop: "-15px",
                      left: "39px",
                    }}
                  />
                </p>
                <p>
                  <img
                    src={withdrawaltolocalemoji}
                    style={{
                      width: "22px",
                      height: "22px",
                      marginTop: "-15px",
                      left: "39px",
                    }}
                  />
                </p>
                <p>
                  <img
                    src={cryptosupportemoji}
                    style={{
                      width: "22px",
                      height: "22px",
                      marginTop: "-15px",
                      left: "39px",
                    }}
                  />
                </p>
                <p>
                  {/* <img
                    src={userinterfaceemoji}
                    style={{
                      width: "22px",
                      height: "22px",
                      marginTop: "-15px",
                      left: "39px",
                    }}
                  /> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
