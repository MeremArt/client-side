import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleImg from "../../assets/Google.svg";
import HyveLogo from "../../assets/HyveLogo.png";
import "./Login.css";
import { useContext } from "react";
import { UserContext } from "../../Context/Context";
import { Button } from "../../Components/button/button";
import CircularProgress from "@mui/material/CircularProgress";

const Login = () => {
  let navigate = useNavigate();

  const { email,userData, setEmail, login_user,get_user, userId,loading,setLoading,errorMsg, setErrorMsg,userRole} = useContext(UserContext);
  const { password, setPassword } = useContext(UserContext);
  
  const login = async (event) => {
    event.preventDefault();

    let data = {
      email,
      password,
    };
    await login_user(data)
      .then(async(response) => { 
        if (response) {
          await get_user(userId).then(navigate(`/dashboard`)).catch(err=>console.log('Getting user error', err))
        } 
      })
      .catch((error) => {
        if (!error?.response) {
          setErrorMsg("No Server Response");
        } else if (error.response.status === 403) {
          setErrorMsg("Missing Email or Password");
        } else if (error.response.status === 401) {
          setErrorMsg("Unauthorized");
        } else {
          setErrorMsg("Login Failed");
        }
        console.log(error);
        console.log(errorMsg);
      });
  };


  console.log(userId);
  return (
    <>

      <div className="login-container">
        <div className="login">
          <div className="unknown">
            <div className="login-upper">
              <div className="login-logo">
                <img src={HyveLogo} alt="" />
              </div>
              <h2>Welcome back!</h2>
              <Link>
                <button className="google-btn">
                  <p> Continue with Google</p>
                  <img src={GoogleImg} />
                </button>
              </Link>
              <div className="use-email">
                <div className="divider"></div>
                <p>Or use email</p>
                <div className="divider"></div>
              </div>
            </div>
            <form>
              <div className="form-input">
                <label htmlFor="email">Email Address</label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  />
                   {/* <p style={{fontSize:'10px', color:'red',marginBottom:'10px'}}>{errorMsg[0]}</p> */}
              </div>
              <div className="form-input">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="password"
                  required
                  autoComplete='password'
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  />
                  {/* <p style={{fontSize:'10px', color:'red',marginBottom:'10px'}}>{errorMsg[1]}</p> */}
              </div>
              <div className="forgot-password-link">
                <Link to="/forgotpassword">Forgot password?</Link>
              </div>
              <Link to="/dashboard">
                <div>
                  <p style={{fontSize:'10px', color:'red',marginBottom:'10px'}}>{errorMsg}</p>
                  <Button
                    value={
                      loading ? (
                        <CircularProgress style={{ color: "#000" }} size={23} />
                        ) : (
                          "Login"
                          )
                        }
                        onClick={login}
                        ></Button>
                </div>
              </Link>
              <div className="signup-link">
                <p>
                  {" "}
                  Don’t have an account?
                  <Link to="/signup">Create Account</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
