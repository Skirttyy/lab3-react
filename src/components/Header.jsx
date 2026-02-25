import "./Header.css"
import logo from "../assets/Header/logo.png"
import homeLogo from "../assets/Header/homeLogo.png"
import portfolioLogo from "../assets/Header/portfolioLogo.png"
import profileLogo from "../assets/Header/profileLogo.png"
import progLogo from "../assets/Header/progLogo.png"
import Home from "../pages/Home"
import NavItem from "./NavItem.jsx"

export default function Header( {navigate }) {
    return (
        <div className="container">
            <div className="logo">
                <img src={logo} height="60px" width="auto"></img>
            </div>
            <div className="navbar">
                <NavItem source={homeLogo} navigate={navigate} location="Home" text="Acasa"/>
                <NavItem source={portfolioLogo} text="Portofoliu"/>
                <NavItem source={profileLogo} text="Profil"/>
                <NavItem source={progLogo} navigate={navigate} location="Contact" text="Programaza-te"/>
            </div>
        </div>
    )
}