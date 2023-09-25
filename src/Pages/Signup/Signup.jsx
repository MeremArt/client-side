import React , { useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import GoogleImg from '../../assets/Google.svg'
import HyveLogo from '../../assets/HyveLogo.png'
import { useContext } from 'react'
import { UserContext } from '../../Context/Context'
import axios from 'axios';
import { Button } from '../../Components/button/button'
import CircularProgress from '@mui/material/CircularProgress'

const REDIRECT_URL = 'http://localhost:5174/dashboard'

const Signup = () => {

    let navigate = useNavigate();

const {email,setEmail} = useContext(UserContext);
const {firstName, setFirstName} = useContext(UserContext);
const {lastName, setLastName} = useContext(UserContext);
const {password, setPassword} = useContext(UserContext);
const {loading,setLoading,errorMsg,setErrorMsg} = useContext(UserContext);

const signup =(event)=>{
    event.preventDefault();
    let data = {
        email,
        firstName,
        lastName,
        password
    }
    setLoading(true)

    axios.post("https://hyve-finance-demo.onrender.com/api/v1/users/signup",data)
    .then(response=>{
        console.log(response)
        setLoading(false)
        navigate('/login')

    })
    .catch(err=>{
        console.log(err)
        setLoading(false)
        if (errorMsg.response) {
            setErrorMsg("No Server Response");
          } else if(err.response.status === 403 ){
            setErrorMsg(err.response.data.message)
          } if(err.response.status === 400 ){
            setErrorMsg('Invalid email or password')
          } 
    });
}

const googleSignup =()=>{
    let data2 = {
        email,
        firstName,
        lastName,
    }

    axios.get('http://hyve-finance-demo.onrender.com/api/v1/oauth/google',data2)
    .then(response=>{
        console.log(response)
    })
    .catch(error=>{
        console.log(error)
    })
}

  return (    
    <>
    <div className='login-container'>
        <div className='login'>
            <div className='unknown'>
            <div className='login-upper'>
                <div className='login-logo' >
                    <img src={HyveLogo} alt=""  />
                </div>
                <h2>
                    Create Account
                </h2>
                {/* <a href="http://hyve-finance-demo.onrender.com/api/v1/oauth/google "> google</a> */}
                <Link >
                    <button className='google-btn' onClick={googleSignup}>
                        <p> Continue with Google</p>
                        <img src={GoogleImg}/>
                    </button>
                </Link>
                <div className='use-email'>
                    <div className='divider'></div>
                    <p>Or use email</p>
                    <div className='divider'></div>
                </div>
            </div>
            <form action="" method="get">
                <div className='form-input'>
                    <label htmlFor="">First Name</label>
                    <input type="text"
                      name = 'firstname'
                      value={firstName}
                      placeholder= 'First name'
                      required
                      onChange={(e)=>{
                        setFirstName(e.target.value)
                    }} />
                     {/* <p style={{fontSize:'10px', color:'red',marginBottom:'10px'}}>{errorMsg[0]}</p> */}
                </div>
                <div className='form-input'>
                    <label htmlFor="">Last Name</label>
                    <input type="text"
                      name = 'lastname'
                      value={lastName}
                      placeholder= 'last name'
                      required
                      onChange={(e)=>{
                        setLastName(e.target.value)

                    }} />
                     {/* <p style={{fontSize:'10px', color:'red',marginBottom:'10px'}}>{errorMsg[1]}</p> */}
                </div>
                <div className='form-input'>
                    <label htmlFor="">Email Address</label>
                    <input type="text"
                      name = 'email'
                      value={email}
                      placeholder= 'email'
                      required
                      onChange={(e)=>{
                        setEmail(e.target.value)
                    }} />
                     {/* <p style={{fontSize:'10px', color:'red',marginBottom:'10px'}}>{errorMsg[2]}</p> */}
                </div>
                <div className='form-input'>
                    <label htmlFor="">Password</label>
                    <input type="password" 
                     name = 'password'
                     value={password}
                     placeholder= 'password'
                     required
                     onChange={(e)=>{
                        setPassword(e.target.value)
                    }}/>
                     {/* <p style={{fontSize:'10px', color:'red',marginBottom:'10px'}}>{errorMsg[3]}</p> */}
                </div>
                <div style={{marginTop:'30px'}}>
                  <p style={{fontSize:'10px', color:'red',marginBottom:'10px'}}>{errorMsg}</p>

                    <Button value={loading?(<CircularProgress style={{ color: "#000" }} size={23}/>):'Sign up'} onClick={signup}>
                    </Button>
                </div>
                <div className='signup-link'>
                <p> Already have an account? 
                <Link to="/login">
                Sign In
                </Link>
                </p>
                </div>
            </form>
            </div>
        </div>
       
    </div> 
    </>
  )
}

export default Signup