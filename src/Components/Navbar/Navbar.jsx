import "./Navbar.css"
import { NavLink } from "react-router-dom"
// import logo from "../../assets/careerclue.png"
import logo from "../../assets/Logo/logo-removebg-preview.png"

function Navbar() {
    return (
        <>
            <div className="navbar flex">
                <div className="navbar-logo">
                    <NavLink to="/" exact={true} end>
                        <img src={logo} className="logo" />
                    </NavLink>
                </div>
                <div className="navbar-links-container flex">
                    <NavLink to="/" className="navbar-links flex spaceCenter" exact={true} end>
                        Home
                    </NavLink>
                    <NavLink to="/CareerForm" className="navbar-links flex spaceCenter" exact={true} end>
                        Career Guide
                    </NavLink>
                    <NavLink to="/Slider" className="navbar-links flex spaceCenter" exact={true} end>
                        Resume Building
                    </NavLink>
                    <NavLink to="/Contact" className="navbar-links flex spaceCenter" exact={true} end>
                        Contact Us
                    </NavLink>
                    <NavLink to="/Faq" className="navbar-links flex spaceCenter" exact={true} end>
                        FAQ
                    </NavLink>
                </div>
            </div>
        </>
    )
}
export default Navbar