import "./Faq.css"
import Navbar from "../Navbar/Navbar"
function Faq() {
    return (
        <div id="bg" >
            <div id="container">
                <h1>Frequently Asked Questions</h1>
                <div id="faqContainer">
                    <div className="question">

                        What is the carreer guidance tool?
                    </div>
                    <div className="answer">

                        It's an AI based tool that helps you predict the best carreer choice for you according to your specific skills and interests.
                    </div>
                    {/* <div className="question">
                        How accurate is the carreer guidance tool?
                    </div> */}
                    <div className="question">
                        Can I trust the predictions of this tool?
                    </div>
                    <div className="answer">
                        You know yourself and your needs best, this tool is just a guiding hand to help you rediscover that.
                    </div>
                    {/* <div className="question">
                        How does it work?
                    </div> */}
                    <div className="question">
                        Do I need to sign up to use the carreer guidance tool?
                    </div>
                    <div className="answer">
                        No, there is no need to sign up or log in, you can use it directly.
                    </div>
                    <div className="question">
                        How does this help anyone?
                    </div>
                    <div className="answer">
                        This tool not only predicts the right choice for you but also gives you a rundown of all the skills you need to make it happen!
                    </div>
                    <div className="question">
                        I know what I want to do and I have the skills for it, how do I apply to jobs?
                    </div>
                    <div className="answer">
                        You will need a good resume. Head over to the Resume Builder to create one in minutes, no editing skills required.                    </div>

                </div>


            </div >

        </div >

    )
}
export default Faq