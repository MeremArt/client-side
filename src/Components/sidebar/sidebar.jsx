import React, { useContext, useState } from 'react'
import './sidebar.css'
import {
  Book1, Moneys,
  ProfileCircle, MessageQuestion,
  Setting2, LogoutCurve,
  ArrowLeft2, Home, WalletAdd1,WalletMinus,ReceiptText
} from 'iconsax-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/Context'


export const Sidebar = (icon) => {

  const [isCollapsed, setIsCollapsed] = useState(false);
  const {isOpen} = useContext(UserContext)

  const toggleSidebar = () => {
  setIsCollapsed(!isCollapsed);
  }

  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { adminPathname } = useLocation()

  const [isHovered, setIsHovered] = useState('');

  const handleMouseEnter = (x) => {
    setIsHovered(x);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const logOut = ()=>{
    sessionStorage.clear()
    localStorage.clear()
    navigate('/login')
  }

  const navlinks = [
    {
      icon: <Home size="28" className='icon' color='#325D9E'/>,
      iconB: <Home size="28" className='icon' variant="Bold" color='#fdfdfd' />,
      name: "Home",
      link: "/dashboard",
      id: "d"
    },
    {
      icon: <Book1 size="28" className='icon' color='#325D9E'/>,
      iconB: <Book1 size="28" className='icon' variant="Bold" color='#fdfdfd' />,
      name: "History",
      link: "/history",
      id: "f"
    },
    {
      icon: <ProfileCircle size="28" className='icon' color='#325D9E'/>,
      iconB: <ProfileCircle size="28" className='icon' variant="Bold" color='#fdfdfd' />,
      name: "Account",
      link: "/account",
      id: "g"
    },
    {
      icon: <Setting2 size="28" className='icon' color='#325D9E'/>,
      iconB: <Setting2 size="28" className='icon' variant="Bold" color='#fdfdfd' />,
      name: "Settings",
      link: "/settings",
      id: "t"
    }
  ]

  const adminNavlinks = [
    {
      icon: <Home size="28" className='icon' color='#325D9E'/>,
      iconB: <Home size="28" className='icon' variant="Bold" color='#fdfdfd' />,
      name: "Overview",
      link: "overview",
      id: "l"
    },
    {
      icon: <WalletAdd1 size="28" className='icon' color='#325D9E'/>,
      iconB: <WalletAdd1 size="28" className='icon' variant="Bold" color='#fdfdfd' />,
      name: "Deposits",
      link: "admindeposits",
      id: "m"
    },
    {
      icon: <WalletMinus size="28" className='icon' color='#325D9E'/>,
      iconB: <WalletMinus size="28" className='icon' variant="Bold" color='#fdfdfd' />,
      name: "Withdrawal",
      link: "withdrawal",
      id: "n"
    },
    {
      icon: <ReceiptText size="28" className='icon' color='#325D9E'/>,
      iconB: <ReceiptText size="28" className='icon' variant="Bold" color='#fdfdfd' />,
      name: "Transactions",
      link: "transactions",
      id: "o"
    }
  ]

  const navlinks2 = [
    {
      icon: <MessageQuestion size="23" className='icon' color='#325D9E'/>,
      iconB: <MessageQuestion size="23" className='icon hover' variant="Bold" color='#fdfdfd' />,
      name: "Get Help",
      link: "",
      id: "x"
    },
    {
      icon: <LogoutCurve size="23" className='icon' color='#ED3030'/>,
      iconB: <LogoutCurve size="23" className='icon' variant="Bold" color='#fdfdfd' />,
      name: "Logout",
      link: "",
      id: "y"
    }
  ]



  return (
    <div className={`${isOpen ? 'main-sidebar': 'main-sidebar  hide2'}`}>
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <button onClick={toggleSidebar}><ArrowLeft2 size="20" color="#fdfdfd"/></button>
      <div className="nav-links1">
        <ul className={pathname === '/dashboard' || pathname==='/history' || pathname==='/account' || pathname==='/settings' || pathname ==='/deposit' || pathname ==='/withdraw' || pathname ==='/send' || pathname==='/receive'  ? 'nav-list' : ' hide'} >
          {
          navlinks.map((items, i) => (
            <li key={i} className={`nav-item ${items.link === pathname ? "nav-item_active" : ""}`} onClick={() => navigate(items.link)} onMouseEnter={() => handleMouseEnter(items.id)} onMouseLeave={handleMouseLeave} >
              {isHovered === items.id || items.link === pathname ? items.iconB : items.icon}
              <a className='link body-text3' to={items.link}>
                {items.name}
              </a>
            </li>
          ))
        }
        </ul>

        <ul className={pathname === '/admin' || pathname === '/admin/overview' || pathname === '/admin/withdrawal' ||  pathname ==='/admin/admindeposits' ||  pathname ==='/admin/transactions'  ? 'nav-list' : 'hide'} >
          {
          adminNavlinks.map((items, i) => (
            <li key={i} className={`nav-item ${items.link ===  pathname ? "nav-item_active" : ""}`} onClick={() => navigate(items.link)} onMouseEnter={() => handleMouseEnter(items.id)} onMouseLeave={handleMouseLeave} >
              {isHovered === items.id || items.link === pathname ? items.iconB : items.icon}
              <a className='link body-text3' to={items.link}>
                {items.name}
              </a>
            </li>
          ))
        }
        </ul>
      </div>

      <div className="nav-links2">
        <ul className='nav-list'>
          {navlinks2.map((items, u) => (
            <li key={u} className='nav-item' onMouseEnter={() => handleMouseEnter(items.id)} onMouseLeave={handleMouseLeave} onClick={()=>{
              items.name === 'Logout' && logOut()
              console.log(items.name)
            }}>
              {isHovered === items.id ? items.iconB : items.icon}
              <a href="" className='link body-text3'>{items.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  )
}

