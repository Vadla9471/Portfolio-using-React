import React from "react";
import './Hero.css'
import myImage from '../../assets/img.png'
import Navbar from "../Navbar/Navbar.jsx";
import {Route} from "react-router-dom";
import Footer from "../Footer/Footer.jsx";

const Hero = () =>{
    return(
        <>
            <Navbar/>

        <div className="hero">

            <img src={myImage} width={280} alt=""/>
            <h1><span>I'm Vadla Vineeth kumar,</span> Full Stack Java Developer</h1>
            <p>I'm a Certified Full Stack Developer from EduBridge</p>
            <div className="hero-action">
                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
            <Footer/>
        </>
    )
}

export default Hero