import React, { useState, useContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LandingPage from "../Components/LandingPage/LandingPage";
import Signup from "../Pages/Signup/Signup";
import Login from "../Pages/Login/Login";
import Forgotpassword from "../Pages/Forgotpassword/Forgotpassword";
import Dashboard from "../Pages/dashboard/dashboard";
import History from "../Pages/history/history";
import Account from "../Pages/account/account";
import Settings from "../Pages/settings/settings";
import Deposit from "../Pages/deposit/deposit";
import Otp from "../Pages/Otp/Otp";
import ResetPassword from "../Pages/Resetpassword/Resetpassword";
import Admindashboard from "../Pages/admindashboard/admindashboard";
import Overview from "../Pages/Overview/Overview";
import Withdrawal from "../Pages/Withdrawal/Withdrawal";
import Transactions from "../Pages/Transactions/Transactions";
import Admindeposits from "../Pages/Admindeposits/admindeposits";
import UserWithdraw from "../Pages/userWithdraw/userWithdraw";
import SendDashboard from "../Pages/sendDashboard/SendDashboard";
import { UserContext } from "../Context/Context";
import Accessdenied from "../Pages/accessdenied/accessdenied";
import Pagenotfound from "../Pages/pagenotfound/pagenotfound";
import Receive from "../Pages/receive/receive";
import Contact from "../Pages/contact/Contact";
import About from "../Pages/about/about";

const Routers = () => {
  // const {userRole} = useContext(UserContext)
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const user_data = JSON.parse(sessionStorage.getItem("newUser"));
    setUserRole(user_data && user_data.role);
  }, []);

  console.log("userRole===", userRole);

  function PrivateElement({ children, userRole }) {
    if ((userRole && userRole) == "admin") {
      return <>{children}</>;
    } else {
      return <Pagenotfound />;
    }
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path={`/dashboard`} exact element={<Dashboard />}></Route>
        <Route path="/history" element={<History />} />
        <Route path="/receive" element={<Receive />} />

        <Route path="/account" element={<Account />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/send" element={<SendDashboard />} />
        <Route path="/withdraw" element={<UserWithdraw />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="*" element={<Pagenotfound />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/admin"
          element={
            <PrivateElement userRole={userRole}>
              <Admindashboard />
            </PrivateElement>
          }
        >
          <Route path="overview" element={<Overview />} />
          <Route path="admindeposits" element={<Admindeposits />} />
          <Route path="withdrawal" element={<Withdrawal />} />
          <Route path="transactions" element={<Transactions />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routers;
