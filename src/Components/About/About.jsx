import React from "react";
import './About.css'
import theme_pattern from '../../assets/Big_Hover_Symbol.svg'
import myImg from '../../assets/myimg.jpg'
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";

const About = () =>{
    return(
        <>
            <Navbar/>
        <div className="about">

            <div className="about-tittle">
                <h1>About me</h1>
                <img src={theme_pattern } alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={myImg} height="350" alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>iam an experienced front end  developer iam an experienced front end  developer iam an experienced front end  developer </p>
                        <p>iam an experienced front end  developer iam an experienced front end  developer iam an experienced front end  developer </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>JAVA</p><hr style={{width:"72%"}} /></div>
                        <div className="about-skill"><p>Spring Boot</p><hr style={{width:"70%"}} /></div>
                        <div className="about-skill"><p>HTML & CSS </p><hr style={{width:"75%"}} /></div>
                        <div className="about-skill"><p>JavaScript </p><hr style={{width:"55%"}} /></div>
                        <div className="about-skill"><p>React Js</p><hr style={{width:"55%"}} /></div>
                        <div className="about-skill"><p>MySQL</p><hr style={{width:"65%"}} /></div>
                    </div>
                </div>
            </div>

        </div>
            <Footer/>
        </>
    )
}
export default About