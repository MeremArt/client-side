import HyveLogo from '../../assets/HyveLogo.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../Context/Context'

const Otp = () => {

 // eslint-disable-next-line react-hooks/rules-of-hooks
 const {otp,setOtp} = useContext(UserContext);

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(otp)
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
                    Enter OTP
                </h2>
                <p>Enter the onetime password sent to your email</p>
            </div>
            <form action="" method="get">
                <div className='form-input'>
                    <label htmlFor="">Enter OTP</label>
                    <input type="text"
                      name = 'otp'
                      placeholder= 'OTP'
                      required
                      onChange={(e)=>{
                        setOtp(e.target.value)
                    }} />

                </div>
                <div>
                    <button className='signin-btn continue-btn' onClick={handleSubmit}>
                        Continue
                    </button>
                </div>
                <div className='signup-link'>
                <p> Didn't recieve code?
                <Link to="signup">
                Resend code
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

export default Otp