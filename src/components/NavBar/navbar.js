import React, { useState } from "react";
import './navbar.css';
import { Link } from "react-scroll";
import menu from "../../assets/burger.png";

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}className="desktopMenuListItem">About Me</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-70} duration={500}className="desktopMenuListItem">Experience</Link>
                <Link activeClass='active' to='resume' spy={true} smooth={true} offset={-70} duration={500}className="desktopMenuListItem">Resume</Link>
            </div>
            <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)} />
            <div className="navMenu" style={{display: showMenu? "flex":"none"}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-70} duration={500}className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='resume' spy={true} smooth={true} offset={-70} duration={500}className="listItem" onClick={()=>setShowMenu(false)}>Resume</Link>
            </div>
        </nav>
    )
}

export default NavBar