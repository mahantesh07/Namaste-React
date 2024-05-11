import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () =>{
    
    const [btnLogin,setBtnLogin] = useState("Login");
  
    useEffect(()=>{
        console.log("useeffect called");
    },[btnLogin]);
    console.log("Header called");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                 <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>   
                    <li>
                        <button className="Login" onClick={()=>{
                            btnLogin === "Login" ? setBtnLogin("LogOut") : setBtnLogin("Login") ;
                        }}>{btnLogin}</button>
                    </li>
                 </ul>
            </div>
        </div>
    );
};

export default Header;