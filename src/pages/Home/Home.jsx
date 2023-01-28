import "./Home.css"
import React from "react"
import { Link } from "react-router-dom"
// import Body from "../../Components/Resume/Body/Body"
import Navbar from "../../Components/Navbar/Navbar"


function Home() {
    return (
        <>
            <div className="homeContainer">
                {/* <Navbar /> */}
                <div className="home-career flex">
                    <div className="home-center-div">
                        <div className="home-heading">
                            FIND YOUR PATH,<br />YOUR CAREER.
                        </div>

                        <div className="home-info">
                            So many career choices and so little time.
                            but with appname you can figure it out in nothing but a few minutes!
                        </div>
                        <Link to="/CareerForm">
                            <button className="home-button">Get started</button>
                        </Link>
                    </div>
                </div>


                <div className="home-career flex">
                    <div className="home-center-div home-right">
                        <div className="home-heading">
                            STRUGGLING WITH YOUR RESUME?
                        </div>
                        <div className="home-info">
                            Create your resume now with our automated resume builder
                        </div>
                        <Link to="/Slider">
                            <button className="home-button">Build now</button>
                        </Link>
                    </div>
                </div>
            </div>

        </>)
}
export default Home