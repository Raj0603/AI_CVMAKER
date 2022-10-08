import "./CareerForm.css"
import * as tf from '@tensorflow/tfjs';
import { useRef, useState, useEffect } from 'react'
import { tensor } from "@tensorflow/tfjs";
// import "react-loader-spinner/dist/loader/ProgressBar"
// import Loader from "react-loader-spinner"
import { fragment } from 'react'


function CareerForm() {

    //references
    // const rwRef = useRef(null);
    // const cgpaRef = useRef(null);
    // const wdRef = useRef(null);
    // const daRef = useRef(null);
    // const tpRef = useRef(null);
    // const ntRef = useRef(null);
    // const gcRef = useRef(null);
    // const mdRef = useRef(null);
    // const comRef = useRef(null);
    // const secRef = useRef(null);
    // const bdRef = useRef(null);
    // const statRef = useRef(null);
    // const engRef = useRef(null);
    // const evRef = useRef(null);
    // const blogRef = useRef(null);
    // const marRef = useRef(null);
    // const mlexRef = useRef(null);
    // const connRef = useRef(null);
    // const liveRef = useRef(null);


    //hooks
    
    const [model, setModel] = useState(null);
    const [prediction, setPrediction] = useState();

    //load model

    const loadModel = async () => {
        const loadedModel = await tf.loadLayersModel('../../../static/tfjs/ann/model.json');
        setModel(loadedModel);
        console.log('model loaded');
    }

    useEffect(() => { loadModel() }, [])

   
    //questions
    const givePredictions = async (e) => {
        if (e.which === 13 && model != null) {
            console.log('Form submitted');
            // const readWrite = rwRef.current.value;
            // const cgpa = cgpaRef.current.value;
            // const wd = wdRef.current.value;
            // const da = daRef.current.value;
            // const tp = tpRef.current.value;
            // const nt = ntRef.current.value;
            // const gc = gcRef.current.value;
            // const md = mdRef.current.value;
            // const com = comRef.current.value;
            // const sec = secRef.current.value;
            // const bd = bdRef.current.value;
            // const stat = statRef.current.value;
            // const eng = engRef.current.value;
            // const ev = evRef.current.value;
            // const blog = blogRef.current.value;
            // const mar = marRef.current.value;
            // const mlex = mlexRef.current.value;
            // const conn = connRef.current.value;
            // const live = liveRef.current.value;
 
            const pred = await model.predict();
            setPrediction(pred)
            console.log(prediction)
        }
    }


    return (


        <div className="form-main">
            {/* <img src="../../assets/Form.svg" alt="" /> */}
                <div className="form-container">

                        
                        <div className="form-row">
                            <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>Reading and writing skills</strong></label></div>
                            <div className="form-col">
                                <select className="dropdown" name="skill" id="skill">
                                    <option value="00">Excellent</option>
                                    <option value="10">Medium</option>
                                    <option value="01">Poor</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="form-row">
                            <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>CGPA</strong><br /></label></div>
                            <div className="form-col"><input  type="number" style={{ margin: "8px" }} /></div>
                        </div>
                       
                        <div className="form-row">
                            <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>web dev experience</strong><br /></label></div>
                            <div  className="form-col">
                                <input type="radio" style={{ paddingLeft: "5px" }} id="yes1" name="web-exp" value="Yes" />
                                <label style={{ marginLeft: "8px" }} for="yes1">Yes</label><br />
                                <input type="radio" style={{ paddingLeft: "5px" }} id="no1" name="web-exp" value="No" />
                                <label style={{ marginLeft: "8px" }} for="no1">NO</label>
                            </div>
                        </div>
                       
                        <div className="form-row">
                            <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>Are you good at data analysis?</strong><br /></label></div>
                            <div className="form-col">
                                <input type="radio" style={{ paddingLeft: "5px" }} id="yes2" name="analysis" value="Yes" />
                                <label style={{ marginLeft: "8px" }} for="yes2">Yes</label><br />
                                <input type="radio" style={{ paddingLeft: "5px" }} id="no2" name="analysis" value="No" />
                                <label style={{ marginLeft: "8px" }} for="no2">NO</label>
                            </div>
                        </div>
                       
                        <div className="form-row">
                            <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>Are you a tech person?</strong><br /></label></div>
                            <div className="form-col">
                                <input type="radio" style={{ paddingLeft: "5px" }} id="yes3" name="tech" value="Yes" />
                                <label style={{ marginLeft: "8px" }} for="yes3">Yes</label><br />
                                <input type="radio" style={{ paddingLeft: "5px" }} id="no3" name="tech" value="No" />
                                <label style={{ marginLeft: "8px" }} for="no3">NO</label>
                            </div>
                        </div>
                        
                        <div className="form-row">
                            <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>were you in non tech society?</strong><br /></label></div>
                            <div className="form-col">
                                <input type="radio" style={{ paddingLeft: "5px" }} id="yes4" name="non_tech" value="Yes" />
                                <label style={{ marginLeft: "8px" }} for="yes4">Yes</label><br />
                                <input type="radio" style={{ paddingLeft: "5px" }} id="no4" name="non_tech" value="No" />
                                <label style={{ marginLeft: "8px" }} for="no4">NO</label>
                            </div>
                        </div>
                        
                        <div className="form-row">
                            <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>are you good at coding?</strong><br /></label></div>
                            <div className="form-col">
                                <input type="radio" style={{ paddingLeft: "5px" }} id="yes5" name="coding" value="Yes" />
                                <label style={{ marginLeft: "8px" }} for="yes5">Yes</label><br />
                                <input type="radio" style={{ paddingLeft: "5px" }} id="no5" name="coding" value="No" />
                                <label style={{ marginLeft: "8px" }} for="no5">NO</label>
                            </div>
                        </div>
                        
                        <div className="form-row">
                            <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>have you developed mobile apps</strong><br /></label></div>
                            <div className="form-col">
                                <input type="radio" style={{ paddingLeft: "5px" }} id="yes6" name="mobdev" value="Yes" />
                                <label style={{ marginLeft: "8px" }} for="yes6">Yes</label><br />
                                <input type="radio" style={{ paddingLeft: "5px" }} id="no6" name="mobdev" value="No" />
                                <label style={{ marginLeft: "8px" }} for="no6">NO</label>
                            </div>
                        </div>
                        
                        <div className="form-row">
                            <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>Are you good at communication</strong><br /></label></div>
                            <div className="form-col">
                                <input type="radio" style={{ paddingLeft: "5px" }} id="yes7" name="communication" value="Yes" />
                                <label style={{ marginLeft: "8px" }} for="yes7">Yes</label><br />
                                <input type="radio" style={{ paddingLeft: "5px" }} id="no7" name="communication" value="No" />
                                <label style={{ marginLeft: "8px" }} for="no7">NO</label>
                            </div>
                        </div>
                        
                        <div className="form-row">
                            <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>do you have specializtion in security</strong><br /></label></div>
                            <div className="form-col">
                                <input type="radio" style={{ paddingLeft: "5px" }} id="yes8" name="security" value="Yes" />
                                <label style={{ marginLeft: "8px" }} for="yes8">Yes</label><br />
                                <input type="radio" style={{ paddingLeft: "5px" }} id="no8" name="security" value="No" />
                                <label style={{ marginLeft: "8px" }} for="no8">NO</label>
                            </div>
                        </div>
                        
                        <div className="form-row">
                            <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>have you ever handled big data?</strong><br /></label></div>
                            <div className="form-col">
                                <input type="radio" style={{ paddingLeft: "5px" }} id="yes9" name="bigdata" value="Yes" />
                                <label style={{ marginLeft: "8px" }} for="yes9">Yes</label><br />
                                <input type="radio" style={{ paddingLeft: "5px" }} id="no9" name="bigdata" value="No" />
                                <label style={{ marginLeft: "8px" }} for="no9">NO</label>
                            </div>
                        </div>
                        
                        <div className="form-row">
                            <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>knowledge of statistics&nbsp;and data science</strong><br /></label></div>
                            <div className="form-col">
                                <input type="radio" style={{ paddingLeft: "5px" }} id="yes10" name="ds" value="Yes" />
                                <label style={{ marginLeft: "8px" }} for="yes10">Yes</label><br />
                                <input type="radio" style={{ paddingLeft: "5px" }} id="no10" name="ds" value="No" />
                                <label style={{ marginLeft: "8px" }} for="no10">NO</label>
                            </div>
                        </div>
                        
                        <div className="form-row">
                            <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>proficient in english</strong><br /></label></div>
                            <div className="form-col">
                                <input type="radio" style={{ paddingLeft: "5px" }} id="yes11" name="english" value="Yes" />
                                <label style={{ marginLeft: "8px" }} for="yes11">Yes</label><br />
                                <input type="radio" style={{ paddingLeft: "5px" }} id="no11" name="english" value="No" />
                                <label style={{ marginLeft: "8px" }} for="no11">NO</label>
                            </div>
                        </div>
                        
                        <div className="form-row">
                            <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>managed some event</strong><br /></label></div>
                            <div className="form-col">
                                <input type="radio" style={{ paddingLeft: "5px" }} id="yes12" name="event" value="Yes" />
                                <label style={{ marginLeft: "8px" }} for="yes12">Yes</label><br />
                                <input type="radio" style={{ paddingLeft: "5px" }} id="no12" name="event" value="No" />
                                <label style={{ marginLeft: "8px" }} for="no12">NO</label>
                            </div>
                        </div>
                        
                        <div className="form-row">
                            <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>do you write tech blogs</strong><br /></label></div>
                            <div className="form-col">
                                <input type="radio" style={{ paddingLeft: "5px" }} id="yes13" name="blogs" value="Yes" />
                                <label style={{ marginLeft: "8px" }} for="yes13">Yes</label><br />
                                <input type="radio" style={{ paddingLeft: "5px" }} id="no13" name="blogs" value="No" />
                                <label style={{ marginLeft: "8px" }} for="no13">NO</label>
                            </div>
                        </div>
                       
                        <div className="form-row">
                            <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>are you into marketing</strong><br /></label></div>
                            <div className="form-col">
                                <input type="radio" style={{ paddingLeft: "5px" }} id="yes14" name="marketing" value="Yes" />
                                <label style={{ marginLeft: "8px" }} for="yes14">Yes</label><br />
                                <input type="radio" style={{ paddingLeft: "5px" }} id="no14" name="marketing" value="No" />
                                <label style={{ marginLeft: "8px" }} for="no14">NO</label>
                            </div>
                        </div>
                   
                        <div className="form-row">
                            <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>are you a ml expert</strong><br /></label></div>
                            <div className="form-col">
                                <input type="radio" style={{ paddingLeft: "5px" }} id="yes15" name="ai" value="Yes" />
                                <label style={{ marginLeft: "8px" }} for="yes15">Yes</label><br />
                                <input type="radio" style={{ paddingLeft: "5px" }} id="no15" name="ai" value="No" />
                                <label style={{ marginLeft: "8px" }} for="no15">NO</label>
                            </div>
                        </div>
                  
                        <div className="form-row">
                            <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>do you have a lot of connections</strong><br /></label></div>
                            <div className="form-col">
                                <input type="radio" style={{ paddingLeft: "5px" }} id="yes16" name="connection" value="Yes" />
                                <label style={{ marginLeft: "8px" }} for="yes16">Yes</label><br />
                                <input type="radio" style={{ paddingLeft: "5px" }} id="no16" name="connection" value="No" />
                                <label style={{ marginLeft: "8px" }} for="no16">NO</label>
                            </div>
                        </div>
                      
                        <div className="form-row">
                            <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>have you ever built live project?</strong><br /></label></div>
                            <div className="form-col">
                                <input type="radio" style={{ paddingLeft: "5px" }} id="yes17" name="live_project" value="Yes" />
                                <label style={{ marginLeft: "8px" }} for="yes17">Yes</label><br />
                                <input type="radio" style={{ paddingLeft: "5px" }} id="no17" name="live_project" value="No" />
                                <label style={{ marginLeft: "8px" }} for="no17">NO</label>
                            </div>
                        </div>
                </div>


            <div className="form-button"><button className="form-submit" type="button"><b>Submit</b></button></div>
        </div>


    )
}
export default CareerForm