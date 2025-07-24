import React from "react";
import './Contact.css'
import Navbar from "../Navbar/Navbar.jsx";
import theme_pattern from '../../assets/Big_Hover_Symbol.svg'
import mail_icon from '../../assets/mail-icon.svg'
import contact_icon from '../../assets/contact-icon.svg'
import location_icon from '../../assets/location-icon.svg'
import contact from "./Contact";
import Footer from "../Footer/Footer.jsx";

const Contact = ()=>{

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "841f49f0-4aaa-4615-85f3-1f60f0242cdb");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message)
            console.log("Success", res);
        }
    };


    return(
        <>
            <Navbar/>
            <div className="contact">
                <div className="contact-tittle">
                    <h1>Get in touch</h1>
                    <img src={theme_pattern} alt=" "/>
                </div>
                <div className="contact-section">
                    <div className={"contact-left"}>
                        <h1>Let's talk</h1>
                        <p>I'm Currently available to take a new projects and i can done any this for you want.</p>
                        <div className={"contact-details"}>
                            <div className="contact-detail">
                                <img src={mail_icon} alt=""/><p>vadlavineethkumar7@gmail.com</p>
                            </div>
                            <div className="contact-detail">
                                <img src={contact_icon} alt=""/><p>+91 9390612818</p>
                            </div>
                            <div className="contact-detail">
                                <img src={location_icon} alt=""/><p>Hyderabad,Telangana</p>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={onSubmit} className="contact-right">
                        <label htmlFor="">Your Name</label>
                        <input type="text" placeholder="Enter your name " name="name"/>
                        <label htmlFor="">Your Email</label>
                        <input type="email" placeholder="Enter your email" name="email" />
                        <label htmlFor="">Write Your Message Here</label>
                        <textarea name={"message"} cols="30" rows="8" placeholder="Enter Your message"></textarea>
                        <button type="submit" className="contact-submit">Submit now</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Contact