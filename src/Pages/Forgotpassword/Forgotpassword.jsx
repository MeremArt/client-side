import React from 'react'
import HyveLogo from '../../assets/HyveLogo.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../Context/Context'

const Forgotpassword = () => {

 const {email,setEmail} = useContext(UserContext);

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(email)
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
                    Forgot Password?
                </h2>
            </div>
            <form action="" method="get">
                <div className='form-input'>
                    <label htmlFor="">Email Address</label>
                    <input type="text"
                      name = 'email'
                      placeholder= 'email'
                      required
                      onChange={(e)=>{
                        setEmail(e.target.value)
                    }} />

                </div>
                <div>
                    <button className='signin-btn continue-btn' onClick={handleSubmit}>
                        Continue
                    </button>
                </div>
                <div className='signup-link'>
                <p> Didn't recieve a link?
                <Link to="signup">
                Resend Link
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

export default Forgotpassword