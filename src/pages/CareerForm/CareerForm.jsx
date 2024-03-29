import "./CareerForm.css"
import Navbar from "../../Components/Navbar/Navbar"
import * as tf from '@tensorflow/tfjs';
import { useRef, useState, useEffect } from 'react'
import axios from "axios";

function CareerForm() {


    const [prediction, setPrediction] = useState("");
    const [RW, setRW] = useState();
    const [CGPA, setCGPA] = useState();
    const [WD, setWD] = useState();
    const [DA, setDA] = useState();
    const [TP, setTP] = useState();
    const [NTP, setNTP] = useState();
    const [GAC, setGAC] = useState();
    const [MA, setMA] = useState();
    const [COM, setCOM] = useState();
    const [SEC, setSEC] = useState();
    const [BD, setBD] = useState();
    const [STAT, setSTAT] = useState();
    const [ENG, setENG] = useState();
    const [EVE, setEVE] = useState();
    const [TB, setTB] = useState();
    const [MAR, setMAR] = useState();
    const [ML, setML] = useState();
    const [CON, setCON] = useState();
    const [LIVE, setLIVE] = useState();




    //get prediction
    useEffect(() => {

        axios.get("http://localhost:4000/CareerForm").then((res) => {
            if (res.data != null) {
                // setPrediction(res.data)
                console.log(res.data)
            }
        })
    }, []);





    const handleSubmit = async (e) => {
        e.preventDefault();
        setPrediction("Waiting for response...")
        console.log('Form submitted');
        // let tensor = ([CGPA,WD,DA,RW[0], RW[1], TP, NTP, GAC, MA, COM, SEC, BD, STAT, ENG, EVE, TB, MAR, ML, CON, LIVE])
        let tensor = ([RW[0], RW[1], CGPA, WD, DA, TP, NTP, GAC, MA, COM, SEC, BD, STAT, ENG, EVE, TB, MAR, ML, CON, LIVE])
        tensor = tensor.toString()
        try {
            await axios.post("http://localhost:4000/post_tensor", {
                tensor
            }).then((res) => {
                var yourRole = ""
                if (res.data != null) {
                    console.log(res.data)
                    let roleArr = res.data.Roles
                    for (const rolesIndex in roleArr) {
                        console.log(roleArr.length, parseInt(rolesIndex) + 1);
                        if(roleArr.length !== parseInt(rolesIndex) + 1){
                            yourRole += roleArr[rolesIndex] + " & ";
                        }else{
                            yourRole += roleArr[rolesIndex] + "  ";
                        }
                    }
                    setPrediction(yourRole)
                }
            })
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <>
            <form onSubmit={handleSubmit} className="form-main" method="POSt">
                <div className="info">
                    <p className="form-info" style={{ marginTop: "12vh" }}>Our AI will help you better understand your choices.</p>
                    <h2 className="form-heading">TAKE THE QUIZ NOW</h2>
                    <p className="form-info">answer the following questions as best as you can.</p>
                </div>
                {/* <img src="../../assets/Form.svg" alt="" /> */}
                <div className="form-container">
                    <div className="form-row">
                        <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>Reading and writing skills</strong></label></div>
                        <div className="form-col">
                            <select value={RW} onChange={(e) => setRW(e.target.value)} className="dropdown" name="skill" id="skill">
                                <option value="select">Select</option>
                                <option value="00">Excellent</option>
                                <option value="10">Medium</option>
                                <option value="01">Poor</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>CGPA</strong><br /></label></div>
                        <div className="form-col"><input type="number" maxlength="10" minLength="1" maxLength="10" oninput="this.value=this.value.replace(/[^0-9]/g" style={{ margin: "8px" }} value={CGPA} onChange={(e) => setCGPA(e.target.value)} /></div>
                    </div>
                    <div className="form-row">
                        <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>web dev experience</strong><br /></label></div>
                        <div value={WD} onChange={(e) => setWD(e.target.value)} className="form-col">
                            <input type="radio" style={{ paddingLeft: "5px" }} id="yes1" name="web-exp" value="1" />
                            <label style={{ marginLeft: "8px" }} for="yes1">Yes</label><br />
                            <input type="radio" style={{ paddingLeft: "5px" }} id="no1" name="web-exp" value="0" />
                            <label style={{ marginLeft: "8px" }} for="no1">No</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>Are you good at data analysis?</strong><br /></label></div>
                        <div value={DA} onChange={(e) => setDA(e.target.value)} className="form-col">
                            <input type="radio" style={{ paddingLeft: "5px" }} id="yes2" name="analysis" value="1" />
                            <label style={{ marginLeft: "8px" }} for="yes2">Yes</label><br />
                            <input type="radio" style={{ paddingLeft: "5px" }} id="no2" name="analysis" value="0" />
                            <label style={{ marginLeft: "8px" }} for="no2">No</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>Are you a tech person?</strong><br /></label></div>
                        <div value={TP} onChange={(e) => setTP(e.target.value)} className="form-col">
                            <input type="radio" style={{ paddingLeft: "5px" }} id="yes3" name="tech" value="1" />
                            <label style={{ marginLeft: "8px" }} for="yes3">Yes</label><br />
                            <input type="radio" style={{ paddingLeft: "5px" }} id="no3" name="tech" value="0" />
                            <label style={{ marginLeft: "8px" }} for="no3">No</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>were you in non tech society?</strong><br /></label></div>
                        <div value={NTP} onChange={(e) => setNTP(e.target.value)} className="form-col">
                            <input type="radio" style={{ paddingLeft: "5px" }} id="yes4" name="non_tech" value="1" />
                            <label style={{ marginLeft: "8px" }} for="yes4">Yes</label><br />
                            <input type="radio" style={{ paddingLeft: "5px" }} id="no4" name="non_tech" value="0" />
                            <label style={{ marginLeft: "8px" }} for="no4">No</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>are you good at coding?</strong><br /></label></div>
                        <div value={GAC} onChange={(e) => setGAC(e.target.value)} className="form-col">
                            <input type="radio" style={{ paddingLeft: "5px" }} id="yes5" name="coding" value="1" />
                            <label style={{ marginLeft: "8px" }} for="yes5">Yes</label><br />
                            <input type="radio" style={{ paddingLeft: "5px" }} id="no5" name="coding" value="0" />
                            <label style={{ marginLeft: "8px" }} for="no5">No</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>have you developed mobile apps</strong><br /></label></div>
                        <div value={MA} onChange={(e) => setMA(e.target.value)} className="form-col">
                            <input type="radio" style={{ paddingLeft: "5px" }} id="yes6" name="mobdev" value="1" />
                            <label style={{ marginLeft: "8px" }} for="yes6">Yes</label><br />
                            <input type="radio" style={{ paddingLeft: "5px" }} id="no6" name="mobdev" value="0" />
                            <label style={{ marginLeft: "8px" }} for="no6">No</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>Are you good at communication</strong><br /></label></div>
                        <div value={COM} onChange={(e) => setCOM(e.target.value)} className="form-col">
                            <input type="radio" style={{ paddingLeft: "5px" }} id="yes7" name="communication" value="1" />
                            <label style={{ marginLeft: "8px" }} for="yes7">Yes</label><br />
                            <input type="radio" style={{ paddingLeft: "5px" }} id="no7" name="communication" value="0" />
                            <label style={{ marginLeft: "8px" }} for="no7">No</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>do you have specializtion in security</strong><br /></label></div>
                        <div value={SEC} onChange={(e) => setSEC(e.target.value)} className="form-col">
                            <input type="radio" style={{ paddingLeft: "5px" }} id="yes8" name="security" value="1" />
                            <label style={{ marginLeft: "8px" }} for="yes8">Yes</label><br />
                            <input type="radio" style={{ paddingLeft: "5px" }} id="no8" name="security" value="0" />
                            <label style={{ marginLeft: "8px" }} for="no8">No</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>have you ever handled big data?</strong><br /></label></div>
                        <div value={BD} onChange={(e) => setBD(e.target.value)} className="form-col">
                            <input type="radio" style={{ paddingLeft: "5px" }} id="yes9" name="bigdata" value="1" />
                            <label style={{ marginLeft: "8px" }} for="yes9">Yes</label><br />
                            <input type="radio" style={{ paddingLeft: "5px" }} id="no9" name="bigdata" value="0" />
                            <label style={{ marginLeft: "8px" }} for="no9">No</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>knowledge of statistics&nbsp;and data science</strong><br /></label></div>
                        <div value={STAT} onChange={(e) => setSTAT(e.target.value)} className="form-col">
                            <input type="radio" style={{ paddingLeft: "5px" }} id="yes10" name="ds" value="1" />
                            <label style={{ marginLeft: "8px" }} for="yes10">Yes</label><br />
                            <input type="radio" style={{ paddingLeft: "5px" }} id="no10" name="ds" value="0" />
                            <label style={{ marginLeft: "8px" }} for="no10">No</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>proficient in english</strong><br /></label></div>
                        <div value={ENG} onChange={(e) => setENG(e.target.value)} className="form-col">
                            <input type="radio" style={{ paddingLeft: "5px" }} id="yes11" name="english" value="1" />
                            <label style={{ marginLeft: "8px" }} for="yes11">Yes</label><br />
                            <input type="radio" style={{ paddingLeft: "5px" }} id="no11" name="english" value="0" />
                            <label style={{ marginLeft: "8px" }} for="no11">No</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>managed some event</strong><br /></label></div>
                        <div value={EVE} onChange={(e) => setEVE(e.target.value)} className="form-col">
                            <input type="radio" style={{ paddingLeft: "5px" }} id="yes12" name="event" value="1" />
                            <label style={{ marginLeft: "8px" }} for="yes12">Yes</label><br />
                            <input type="radio" style={{ paddingLeft: "5px" }} id="no12" name="event" value="0" />
                            <label style={{ marginLeft: "8px" }} for="no12">No</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>do you write tech blogs</strong><br /></label></div>
                        <div value={TB} onChange={(e) => setTB(e.target.value)} className="form-col">
                            <input type="radio" style={{ paddingLeft: "5px" }} id="yes13" name="blogs" value="1" />
                            <label style={{ marginLeft: "8px" }} for="yes13">Yes</label><br />
                            <input type="radio" style={{ paddingLeft: "5px" }} id="no13" name="blogs" value="0" />
                            <label style={{ marginLeft: "8px" }} for="no13">No</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>are you into marketing</strong><br /></label></div>
                        <div value={MAR} onChange={(e) => setMAR(e.target.value)} className="form-col">
                            <input type="radio" style={{ paddingLeft: "5px" }} id="yes14" name="marketing" value="1" />
                            <label style={{ marginLeft: "8px" }} for="yes14">Yes</label><br />
                            <input type="radio" style={{ paddingLeft: "5px" }} id="no14" name="marketing" value="0" />
                            <label style={{ marginLeft: "8px" }} for="no14">No</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>are you a ml expert</strong><br /></label></div>
                        <div value={ML} onChange={(e) => setML(e.target.value)} className="form-col">
                            <input type="radio" style={{ paddingLeft: "5px" }} id="yes15" name="ai" value="1" />
                            <label style={{ marginLeft: "8px" }} for="yes15">Yes</label><br />
                            <input type="radio" style={{ paddingLeft: "5px" }} id="no15" name="ai" value="0" />
                            <label style={{ marginLeft: "8px" }} for="no15">No</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>do you have a lot of connections</strong><br /></label></div>
                        <div value={CON} onChange={(e) => setCON(e.target.value)} className="form-col">
                            <input type="radio" style={{ paddingLeft: "5px" }} id="yes16" name="connection" value="1" />
                            <label style={{ marginLeft: "8px" }} for="yes16">Yes</label><br />
                            <input type="radio" style={{ paddingLeft: "5px" }} id="no16" name="connection" value="0" />
                            <label style={{ marginLeft: "8px" }} for="no16">No</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>have you ever built live project?</strong><br /></label></div>
                        <div value={LIVE} onChange={(e) => setLIVE(e.target.value)} className="form-col">
                            <input type="radio" style={{ paddingLeft: "5px" }} id="yes17" name="live_project" value="1" />
                            <label style={{ marginLeft: "8px" }} for="yes17">Yes</label><br />
                            <input type="radio" style={{ paddingLeft: "5px" }} id="no17" name="live_project" value="0" />
                            <label style={{ marginLeft: "8px" }} for="no17">No</label>
                        </div>
                    </div>
                    <div className="prediction">
                        <p>{ }</p>
                    </div>

                </div>
                <div className="role">{prediction}</div>
                <div className="form-button"><button className="form-submit submitbtn" type="submit"><b>Submit</b></button></div>
            </form>
        </>
    )
}
export default CareerForm