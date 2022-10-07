import "./CareerForm.css"

function CareerForm() {
    return (
        

            <div className="form-main">
                {/* <img src="../../assets/Form.svg" alt="" /> */}
                <div className="form-container">
                    <div className="form-row">
                        <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>Reading and writing skills</strong></label></div>
                        <div className="form-col">
                        <select className="dropdown" name="skill" id="skill">
                                <option value="select">Select</option>
                                <option value="Excellent">Excellent</option>
                                <option value="Medium">Medium</option>
                                <option value="Poor">Poor</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>CGPA</strong><br /></label></div>
                        <div className="form-col"><input type="number" style={{ margin: "8px" }} /></div>
                    </div>
                    <div className="form-row">
                        <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>web dev experience</strong><br /></label></div>
                        <div className="form-col">
                            <div className="form-check"><input className="form-input" type="radio" id="formCheck-1" /><label className="form-check-label" htmlFor="formCheck-1">yes</label></div>
                            <div className="form-check"><input className="form-input" type="radio" id="formCheck-2" /><label className="form-check-label" htmlFor="formCheck-2">no</label></div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>Are you good at data analysis?</strong><br /></label></div>
                        <div className="form-col">
                            <div className="form-check"><input className="form-input" type="radio" id="formCheck-3" /><label className="form-check-label" htmlFor="formCheck-3">yes</label></div>
                            <div className="form-check"><input className="form-input" type="radio" id="formCheck-4" /><label className="form-check-label" htmlFor="formCheck-4">no</label></div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>Are you a tech person?</strong><br /></label></div>
                        <div className="form-col">
                            <div className="form-check"><input className="form-input" type="radio" id="formCheck-5" /><label className="form-check-label" htmlFor="formCheck-5">yes</label></div>
                            <div className="form-check"><input className="form-input" type="radio" id="formCheck-6" /><label className="form-check-label" htmlFor="formCheck-6">no</label></div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>were you in non tech society?</strong><br /></label></div>
                        <div className="form-col">
                            <div className="form-check"><input className="form-input" type="radio" id="formCheck-7" /><label className="form-check-label" htmlFor="formCheck-7">yes</label></div>
                            <div className="form-check"><input className="form-input" type="radio" id="formCheck-8" /><label className="form-check-label" htmlFor="formCheck-8">no</label></div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>are you good at coding?</strong><br /></label></div>
                        <div className="form-col">
                            <div className="form-check"><input className="form-input" type="radio" id="formCheck-9" /><label className="form-check-label" htmlFor="formCheck-9">yes</label></div>
                            <div className="form-check"><input className="form-input" type="radio" id="formCheck-10" /><label className="form-check-label" htmlFor="formCheck-10">no</label></div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>have you developed mobile apps</strong><br /></label></div>
                        <div className="form-col">
                            <div className="form-check"><input className="form-input" type="radio" id="formCheck-11" /><label className="form-check-label" htmlFor="formCheck-11">yes</label></div>
                            <div className="form-check"><input className="form-input" type="radio" id="formCheck-12" /><label className="form-check-label" htmlFor="formCheck-12">no</label></div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>Are you good at communication</strong><br /></label></div>
                        <div className="form-col">
                            <div className="form-check"><input className="form-input" type="radio" id="formCheck-13" /><label className="form-check-label" htmlFor="formCheck-13">yes</label></div>
                            <div className="form-check"><input className="form-input" type="radio" id="formCheck-14" /><label className="form-check-label" htmlFor="formCheck-14">no</label></div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>do you have specializtion in security</strong><br /></label></div>
                        <div className="form-col">
                            <div className="form-check"><input className="form-input" type="radio" id="formCheck-15" /><label className="form-check-label" htmlFor="formCheck-15">yes</label></div>
                            <div className="form-check"><input className="form-input" type="radio" id="formCheck-16" /><label className="form-check-label" htmlFor="formCheck-16">no</label></div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>have you ever handled big data?</strong><br /></label></div>
                        <div className="form-col">
                            <div className="form-check"><input className="form-input" type="radio" id="formCheck-17" /><label className="form-check-label" htmlFor="formCheck-17">yes</label></div>
                            <div className="form-check"><input className="form-input" type="radio" id="formCheck-18" /><label className="form-check-label" htmlFor="formCheck-18">no</label></div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>knowledge of statistics&nbsp;and data science</strong><br /></label></div>
                        <div className="form-col">
                            <div className="form-check"><input className="form-input" type="radio" id="formCheck-19" /><label className="form-check-label" htmlFor="formCheck-19">yes</label></div>
                            <div className="form-check"><input className="form-input" type="radio" id="formCheck-20" /><label className="form-check-label" htmlFor="formCheck-20">no</label></div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>proficient in english</strong><br /></label></div>
                        <div className="form-col">
                            <div className="form-check"><input className="form-input" type="radio" id="formCheck-21" /><label className="form-check-label" htmlFor="formCheck-21">yes</label></div>
                            <div className="form-check"><input className="form-input" type="radio" id="formCheck-22" /><label className="form-check-label" htmlFor="formCheck-22">no</label></div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>managed some event</strong><br /></label></div>
                        <div className="form-col">
                            <div className="form-check"><input className="form-input" type="radio" id="formCheck-23" /><label className="form-check-label" htmlFor="formCheck-23">yes</label></div>
                            <div className="form-check"><input className="form-input" type="radio" id="formCheck-24" /><label className="form-check-label" htmlFor="formCheck-24">no</label></div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>do you write tech blogs</strong><br /></label></div>
                        <div className="form-col">
                            <div className="form-check"><input className="form-input" type="radio" id="formCheck-25" /><label className="form-check-label" htmlFor="formCheck-25">yes</label></div>
                            <div className="form-check"><input className="form-input" type="radio" id="formCheck-26" /><label className="form-check-label" htmlFor="formCheck-26">no</label></div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>are you into marketing</strong><br /></label></div>
                        <div className="form-col">
                            <div className="form-check"><input className="form-input" type="radio" id="formCheck-27" /><label className="form-check-label" htmlFor="formCheck-27">yes</label></div>
                            <div className="form-check"><input className="form-input" type="radio" id="formCheck-28" /><label className="form-check-label" htmlFor="formCheck-28">no</label></div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>are you a ml expert</strong><br /></label></div>
                        <div className="form-col">
                            <div className="form-check"><input className="form-input" type="radio" id="formCheck-29" /><label className="form-check-label" htmlFor="formCheck-29">yes</label></div>
                            <div className="form-check"><input className="form-input" type="radio" id="formCheck-30" /><label className="form-check-label" htmlFor="formCheck-30">no</label></div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>do you have a lot of connections</strong><br /></label></div>
                        <div className="form-col">
                            <div className="form-check"><input className="form-input" type="radio" id="formCheck-31" /><label className="form-check-label" htmlFor="formCheck-31">yes</label></div>
                            <div className="form-check"><input className="form-input" type="radio" id="formCheck-32" /><label className="form-check-label" htmlFor="formCheck-32">no</label></div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col"><label className="form-label" style={{ margin: "10px" }}><strong>have you ever built live project?</strong><br /></label></div>
                        <div className="form-col">
                            <div className="form-check"><input className="form-input" type="radio" id="formCheck-33" /><label className="form-check-label" htmlFor="formCheck-33">yes</label></div>
                            <div className="form-check"><input className="form-input" type="radio" id="formCheck-34" /><label className="form-check-label" htmlFor="formCheck-34">no</label></div>
                        </div>
                    </div>
                    
                </div>
                        <div className="form-col text-center"><button className="btn btn-primary text-center" type="button">Button</button></div>
            </div>

    )
}
export default CareerForm