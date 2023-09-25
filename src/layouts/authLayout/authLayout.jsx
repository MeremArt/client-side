import "./authLayout.css";
import { Navbar, Sidebar } from "../../Components"
// import { useContext,useEffect } from "react";
// import { UserContext } from "../../Context/Context";

export const AuthLayout = ({ children }) => {
    // const {userId, userData , get_user, loading} = useContext(UserContext);

    // useEffect(() => {
    //     if(!userId){
    //       const user_id = localStorage.getItem("userID");
    //       get_user(user_id)
    //     }
    //   }, [userId]);

    // if(loading){
    //     return <h1>Loading....</h1>
    //   }

    return (
        <div className='dashboard'>
            <Navbar />
            <div className="container">
                <Sidebar />
                <div className="page_wrapper">
                    {children}
                </div>
            </div>
        </div>
    )
}