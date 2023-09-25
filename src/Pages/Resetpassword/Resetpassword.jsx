import HyveLogo from '../../assets/HyveLogo.png'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { UserContext } from '../../Context/Context'

const ResetPassword = () => {

 // eslint-disable-next-line react-hooks/rules-of-hooks
 const {password,setPassword} = useContext(UserContext);
 const {confirmPassword,setconfirmPassword} = useContext(UserContext);




  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(password)
}

const Style1 = {  
    display: 'none',  
 }

 const Style2 = {  
    color: 'red',  
 }

 const [style, setStyle] = useState(Style1)
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
                    Reset Password?
                </h2>
                <p>Create a new and secure password to access your account</p>
            </div>
            <form action="" method="get">
                <div className='form-input'>
                <label htmlFor="">Password</label>
                <input type="password" 
                    name = 'password'
                    placeholder= 'password'
                    required
                    onChange={(e)=>{
                    setPassword(e.target.value)
                }}/>
                </div>
                <div className='form-input'>
                <label htmlFor=""> Confirm Password</label>
                <input type="password" 
                    name = 'confirmPassword'
                    placeholder= ' confirm password'
                    required
                    onChange={(e)=>{
                        setconfirmPassword(e.target.value);
                       { (password === e.target.value)? setStyle(Style1) : setStyle(Style2);}
                }}/>
                <span style = {style}>Password does not match!</span>
                </div>
                <div>
                    <button className='signin-btn continue-btn' onClick={handleSubmit}>
                        Continue
                    </button>
                </div>
                <div className='signup-link'>
                </div>
            </form>
            </div>
        </div>
       
    </div> 
    </>
  )
}

export default ResetPassword