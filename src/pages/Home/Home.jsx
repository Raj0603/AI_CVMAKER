import "./Home.css"
// import Link from "react-router-dom"
// import Body from "../../Components/Resume/Body/Body"


function Home() {
    return (
        <>
            <div className="homeContainer">
                <div className="career">
                    <p>FIND YOUR PATH, <br /> YOUR CAREER.</p>

                    <p>So many career choices and so little time.
                        but with appname you can figure it out in nothing but a few minutes!
                    </p>
                    <button>Get started</button>
                </div>

                <div className="career">
                    <p>STRUGGLING WITH YOUR RESUME</p>

                    <p>Create your resume now with our automated resume builder
                    </p>

                    <button>Build now</button>
                </div>
            </div>

        </>)
}
export default Home