import "./Navbar.css"
import {Link} from "react-router-dom"
import logo from "../../assets/careerclue.png"

function Navbar() {
    return (
        <>
            <div className="login-signup">
                <img src={logo} className="logo" />
                <Link to="/Signup">
                <button className="home-signup">Signup</button>
                </Link>
                <Link to="/Login">
                <button className="home-login">Login</button>
                </Link>
            </div>
            <div className="home-navbar">
                <Link to="/">

                <a href="" className="home-nav-ele">HOME</a>
                </Link>
                <Link to="/CareerForm">
                <a href="" className="home-nav-ele">career guide</a>
                </Link>
                <Link to="/Slider">
                <a href="" className="home-nav-ele">resume building</a>
                </Link>
                <Link to="/Contact">
                <a href="" className="home-nav-ele">Contact US</a>
                </Link>
                <Link to="/Faq">
                <a href="" className="home-nav-ele" style={{ borderRight: "none" }}>FAQ</a>
                </Link>
            </div>
        </>
    )
}
export default Navbar