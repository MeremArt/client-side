import React from "react";
import "./quicklink.css";
import { Link } from "react-router-dom";
import {  WalletAdd1, 
  Send2, Receive, WalletMinus
} from "iconsax-react"


const links = [
  { id: 1, label: "Deposits", url: "/deposit", border:'0.3px solid #06B178', iconbg:'bluebg', icon:<WalletAdd1 size="20" color="#06B178"/>},
  { id: 2, label: "Send", url: "/send",  border:'0.3px solid #D45D00', iconbg:'redbg', icon:<Send2 size="20" color="#FF8A65"/>},
  { id: 3, label: "Receive", url: "/receive", border:'0.3px solid #06B178', iconbg:'bluebg', icon:<Receive size="20" color="#06B178"/>},
  { id: 4, label: "Withdraw", url: "/withdraw", border:'0.3px solid #ED3030', iconbg:'redbg', icon:<WalletMinus size="20" color="#EF5252"/>},
];


const Quicklink = () => {

  return (
    <div className="quicklinks">
  
      {links.map((link, index) => {
      return  <Link  to={link.url} className="borderstuff" style={{ borderColor: link.border, border:link.border }} key={`${link.label}-${index}`}>
          <div
            className={`quicklink_circle ${link.iconbg}`} 
          >
            {link.icon}
          </div>
          <div key={link.id} to={link.url}>
            {link.label}
          </div>
        </Link>;
      })}
    </div>
  );
};

export default Quicklink;