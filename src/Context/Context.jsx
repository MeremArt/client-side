import { createContext, useContext, useState, useEffect } from "react";
export const UserContext = createContext();
import axios from "axios";
import { Navigate, useNavigate,useLocation } from "react-router-dom";
import Pagenotfound from "../Pages/pagenotfound/pagenotfound";

const URL = "https://hyve-finance-demo.onrender.com/api/v1/users";

const UserContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("OTP");
  const [confirmPassword, setconfirmPassword] = useState("confirm password");
  const [signupData, setSignupData] = useState("");
  const [hyveId, setHyveId] = useState("");
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [userinfo, setUserInfo] = useState(false);
  const [userData, setUserData] = useState(null);
  const [allDeposits, setAllDeposits] = useState([])
  const [allWithdrawal,setAllWithdrawal] = useState([])
  const [nairaAmount, setNairaAmount] = useState('');
  const [usdtAmount, setUsdtAmount] = useState('');
  const [exchangeRate, setExchangeRate] = useState('');
  const [amount,setAmount] = useState('');
  const [sendInput,setSendInput] = useState('');
  const [sendHyve,setSendHyve] = useState('');
  const [userRole,setUserRole] = useState('');
  const [receiverName,setReceiverName] = useState('');
  const [userTransaction, setUserTransaction] = useState([])
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate()
  const location = useLocation()

  const login_user = async (data) => {
    setLoading(true)
    try {
      const response = await axios.post(`${URL}/login`, data);
      if (response) {
        const { user } = await response.data.data;
        if (user) {
          console.log("USER::: ", user);
          const user_data = {
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            hyveId: user.hyveId,
            balance:user.balance,
            role:user.role,
            avatar:user.avatar
          };

          setUserId(user._id);
          setUserData({...user_data});
          setUserRole(user.role)
          sessionStorage.setItem("newUser", JSON.stringify(user_data));
          localStorage.setItem("userID", user._id);

          return response;
        }
        get_user()
      }
    } catch (err) {
      setLoading(false)
      if (errorMsg.response) {
        setErrorMsg("No Server Response");
      } else if(err.response.status === 403 ){
        setErrorMsg(err.response.data.message)
      } if(err.response.status === 400 ){
        setErrorMsg(err.response.data.message)
      }  if(err.response.status === 401 ){
        setErrorMsg(err.response.data.message)
      } 
      console.log("Error logging in:: ", err.response);
    }
  };


 

  const get_user = async () => {
    setLoading(true);
    try {
      let userId2 = localStorage.getItem('userID')
      const response =  await axios.get(`https://hyve-finance-demo.onrender.com/api/v1/users/${userId2}`);
      sessionStorage.setItem("newUser", JSON.stringify(response.data.data));
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log("Error getting user:: ", err);
    }
  };

  const user_data = JSON.parse(sessionStorage.getItem("newUser"));
  // setUserRole(user_data.role)

  useEffect(() => {
    if (location.pathname === '/dashboard'  || location.pathname === '/send' || location.pathname === '/deposit' || location.pathname === '/history' || location.pathname === '/account'|| location.pathname === '/withdraw' || location.pathname === '/settings'|| location.pathname === '/settings' &&  !userId) {
      // get_user()
      // navigate('/login')
      const user_data = JSON.parse(sessionStorage.getItem("newUser"));
      if(!user_data){
        navigate('/login')
      } else{
        setUserId(user_data.id);
        setUserData({...user_data})
        setUserRole(user_data.role)
      }
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <UserContext.Provider
      value={{
        email,
        setEmail,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        password,
        setPassword,
        otp,
        setOtp,
        confirmPassword,
        setconfirmPassword,
        signupData,
        setSignupData,
        hyveId,
        setHyveId,
        userId,
        setUserId,
        loading,
        setLoading,
        errorMsg,
        setErrorMsg,
        userinfo,
        setUserInfo,
        userData,
        setUserData,
        login_user,
        get_user,
        allDeposits, 
        setAllDeposits,
        allWithdrawal,setAllWithdrawal,
        nairaAmount, setNairaAmount,
        usdtAmount, setUsdtAmount,
        exchangeRate, setExchangeRate,
        amount,setAmount,
        sendInput,setSendInput,
        sendHyve,setSendHyve,
        userRole,setUserRole,receiverName,setReceiverName,userTransaction, setUserTransaction,
        isOpen,toggleMenu
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
