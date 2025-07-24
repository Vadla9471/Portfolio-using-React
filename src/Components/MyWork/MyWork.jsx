import React from "react";
import './MyWork.css'
import theme_pattern from '../../assets/Big_Hover_Symbol.svg'
import Navbar from "../Navbar/Navbar.jsx";
import polimeras from '../../assets/Polimeras.png'
import direction from '../../assets/direction.svg'
import Footer from "../Footer/Footer.jsx";

const MyWork = ()=>{
    const my_work_data = [
        {
            w_no:1,
            w_name:"Polimeras Grocery Web-App",
            w_img:polimeras
        },
        {
            w_no:2,
            w_name:"Portfolio",
            w_img:polimeras
        },
        {
            w_no:3,
            w_name:"Portfolio",
            w_img:polimeras
        }
    ]
    return(
        <>
            <Navbar/>
        <div className="myWork">
            <div className="myWork-tittle">
                <h1>My Latest Work</h1>
                <img src={theme_pattern} alt=""/>
            </div>
            <div className="myWork-container">
                {
                    my_work_data.map((work,index)=>{
                        return <img key={index} src={work.w_img} width={100} alt=""/>
                    })
                }
            </div>
            <div className="myWork-showMore">
                <p>Show More</p>
                <img src={direction}  alt=""/>
            </div>
        </div>
            <Footer/>
        </>
    )
}

export default MyWork