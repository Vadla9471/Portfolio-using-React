import React, {useRef, useState} from "react";
import './Navbar.css'
import logo from '../../assets/logo.png'
import {Link, useLocation} from "react-router-dom";
import hover_logo from "../../assets/hover_symblo.svg"
import menu_open from '../../assets/download.svg'
import cancel_menu from '../../assets/cancel-icon.svg'

const Navbar = () =>{

    // const [menu,setMenu] = useState("/")
    //
    // return(
    //     <div className="navBar">
    //         <img src={logo} alt="logo" width={250}  height={"auto"}/>
    //         <ul className="nav-menu">
    //             <li onClick={()=>setMenu("/")}>
    //                 <Link to="/"><p>Home</p></Link>
    //                 {menu==='/'?<img src={hover_logo} alt=""/> : <></>}
    //             </li>
    //             <li>
    //                 <Link onClick={()=>setMenu("/about-me")} to="/about-me">About me {menu==='/about-me'?<img src={hover_logo} alt=""/> : <></>} </Link>
    //             </li>
    //             <li onClick={()=>setMenu("/services")}>
    //                 <Link to="/services"><p>Services</p></Link>
    //                 {menu==='/services'?<img src={hover_logo} alt=""/> : <></>}
    //             </li>
    //             <li onClick={()=>setMenu("/portfolio")}>
    //                 <Link to="/portfolio" ><p>Portfolio</p></Link>
    //                 {menu==='/portfolio'?<img src={hover_logo} alt=""/> : <></>}
    //             </li>
    //             <li onClick={()=>setMenu("/contact")}>
    //                 <Link to="/contact"  ><p>Contact</p></Link>
    //                 {menu==='/contact'?<img src={hover_logo} alt=""/> : <></>}
    //             </li>
    //         </ul>
    //         <div className="nav-connect">Connect with me</div>
    //     </div>
    // )

    const location = useLocation();
    const currentPath = location.pathname;
    const menuRef = useRef();
    const openMenu = () => {
        menuRef.current.style.right="0"
    }
    const closeMenu = () => {
        menuRef.current.style.right="-350px"
    }

    return (
        <div className="navBar">
            <img src={logo} alt="logo" width={250} height="auto" />
            <img src={menu_open} alt="" onClick={openMenu} className="nav-mob-open"/>
            <ul ref={menuRef} className="nav-menu">
                <img src={cancel_menu} alt=" " onClick={closeMenu} className="nav-mob-close" />
                <li>
                    <Link to="/"><p>Home</p></Link>
                    {currentPath === '/' && <img src={hover_logo} width={60} alt="hover" />}
                </li>

                <li>
                    <Link to="/about-me"><p>About me</p></Link>
                    {currentPath === '/about-me' && <img src={hover_logo} width={80} alt="hover" />}
                </li>

                <li>
                    <Link to="/services"><p>Services</p></Link>
                    {currentPath === '/services' && <img src={hover_logo} alt="hover" width={80} />}
                </li>

                <li>
                    <Link to="/portfolio"><p>Portfolio</p></Link>
                    {currentPath === '/portfolio' && <img src={hover_logo} width={80} alt="hover" />}
                </li>

                <li>
                    <Link to="/contact"><p>Contact</p></Link>
                    {currentPath === '/contact' && <img src={hover_logo} width={80} alt="hover" />}
                </li>
            </ul>
            <div className="nav-connect">Connect with me</div>
        </div>
    );
}

export default Navbar

