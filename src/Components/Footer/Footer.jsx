import React from "react";
import './Footer.css'
import logo from '../../assets/logo.png'
import user_logo from '../../assets/user-icon.svg'

const Footer = () =>{
    return(
        <>
            <div className="footer">
                <div className="footer-top">
                    <div className="footer-top-left">
                        <img src={logo} width={300} alt=" "/>
                        <p>I,m a java Developer from Hyderabad , Telangana</p>
                    </div>
                    <div className="footer-top-right">
                        <div className="footer-email-input">
                            <img src={user_logo} alt=" "/>
                            <input placeholder={"Enter your email"} type={"email"} name={"name"}/>
                        </div>
                        <div className="footer-subscribe">Subscribe</div>
                    </div>
                </div>
                <hr/>
                <div className="footer-bottom">
                    <div className="footer-bottom-left">
                        &copy;2025 Vadla Vineeth kumar, All rights reserved.
                    </div>
                    <div className="footer-bottom-right">
                        <p>Term of Services</p>
                        <p>Privacy Policy</p>
                        <p>Connect with me</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer