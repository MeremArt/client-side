// import React from 'react'
// import { Route, useNavigate } from 'react-router-dom'

// const Protectedroute = ({isAuth:isAuth,component:Component, ...rest}) => {

//   const navigate = useNavigate()
//   return (
//     <Route
//     {...rest} 
//     render={(props)=>{
//       if (isAuth){
//         return <Component/>;
//       } else{
//         return( 
//         navigate (to={{pathname:'/', state:{from: props.location}}})
//         );
//       }
//     }}/>
//   );
// }

// export default Protectedroute