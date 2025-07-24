import React from "react";
import './Services.css'
import theme_pattern from '../../assets/Big_Hover_Symbol.svg'
import {Services_Data} from '../../assets/services_data.js'
import icon from '../../assets/direction.svg'
import Navbar from "../Navbar/Navbar.jsx";
import {Route} from "react-router-dom";
import Footer from "../Footer/Footer.jsx";

const Services = () =>{
    return(
        <>
            <Navbar/>
        <div className="services">
            <div className="services-tittle">
                <h1>My Services</h1>
                <img src={theme_pattern} alt=''/>
            </div>
            <div className="service-container">
                {
                    Services_Data.map((service,index)=>{
                        return (
                            <div key={index} className="services-format">
                            <h3>{service.s_no}</h3>
                            <h2>{service.s_name}</h2>
                            <p>{service.s_desc}</p>
                            <div className="services-readMore">
                                <p>Read More</p>
                                <img src={icon} alt=""/>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
            <Footer/>
        </>
    )
}

export default Services