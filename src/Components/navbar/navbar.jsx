import React, { useState } from "react";
import "./navbar.css";
import { Global, ArrowDown2, Notification, Copy } from "iconsax-react";
import { useContext, useEffect } from "react";
import { UserContext } from "../../Context/Context";
import { Button } from "../button/button";
import HyveLogo from "../../assets/swaplogo.png";
import Swap from "../../assets/logo.svg";
// import axios from 'axios'

const Navbar = ({ text }) => {
  const { email, setEmail } = useContext(UserContext);
  const { firstName, setFirstName } = useContext(UserContext);
  const { lastName, setLastName } = useContext(UserContext);
  const { password, setPassword } = useContext(UserContext);
  const { hyveId, setHyveId } = useContext(UserContext);
  const { userId, setUserId } = useContext(UserContext);
  const { userData, setUserData } = useContext(UserContext);

  const handleCopy = (id) => {
    navigator.clipboard.writeText(id);
    alert("User ID copied to clipboard!");
    console.log(text);
  };

  const user_data = JSON.parse(sessionStorage.getItem("newUser"));

  return (
    <div className="navbar">
      <div className="topbar">
        <div className="location">
          <div className="flexitem">
            <Global color="#d9d9d9" size={20} className="global" />
          </div>
          <p className="flexitem">Nigeria</p>
        </div>
      </div>

      <div className="nav">
        <div className="nav-logo">
          {/* <p>HYVE</p> */}
          <img src={Swap} alt="SwapXpress Logo" />
        </div>

        <div className="nav-profile">
          <div className="bell">
            <Notification size="20" color="#808080" className="bell-noti" />
          </div>
          <div className="profile-icon">
            <img src={user_data && user_data.avatar} alt="" />
          </div>
          <div className="profile-name-section">
            <div className="name">
              <p>{`${user_data && user_data.firstName}  ${
                user_data && user_data.lastName
              }`}</p>
              <ArrowDown2 size="20" color="#404040" variant="Bold" />
            </div>
            <div className="name-id">
              <p>User ID: {user_data && user_data.hyveId}</p>
              <div className="copy">
                <Copy
                  size="17"
                  color="#808080"
                  className="copy-icon"
                  onClick={() => userData && handleCopy(userData.hyveId)}
                  text={user_data && user_data.hyveId}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
