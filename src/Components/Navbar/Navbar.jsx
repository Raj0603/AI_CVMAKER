import "./Navbar.css"
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className="login-signup">
                <Link to="/Signup">
                <button className="home-signup">Signup</button>
                </Link>
                <Link to="/Login">
                <button className="home-login">Login</button>
                </Link>
            </div>
            <div className="home-navbar">
                <a href="" className="home-nav-ele">HOME</a>
                <a href="" className="home-nav-ele">career guide</a>
                <a href="" className="home-nav-ele">resume building</a>
                <a href="" className="home-nav-ele" style={{ borderRight: "none" }}>FAQ</a>
            </div>
        </>
    )
}
export default Navbar