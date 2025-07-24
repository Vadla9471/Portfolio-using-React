import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import About from "./Components/About/About.jsx";
import Services from "./Components/Services/Services.jsx";
import MyWork from "./Components/MyWork/MyWork.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Contact from "./Components/Contact/Contact.jsx";

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Hero/>}/>
                <Route path="/about-me" element={<About/>} />
                <Route path="/services" element={<Services/>} />
                <Route path="/portfolio" element={<MyWork/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App