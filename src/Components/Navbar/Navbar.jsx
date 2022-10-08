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
                <Link to="/">

                <a href="" className="home-nav-ele">HOME</a>
                </Link>
                <Link to="/CareerForm">
                <a href="" className="home-nav-ele">career guide</a>
                </Link>
                <Link to="/Body">
                <a href="" className="home-nav-ele">resume building</a>
                </Link>
                <Link to="/">
                <a href="" className="home-nav-ele" style={{ borderRight: "none" }}>FAQ</a>
                </Link>
            </div>
        </>
    )
}
export default Navbar