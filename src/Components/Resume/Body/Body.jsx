import React, { useRef, useState } from "react";

import Editor from "../Editor/Editor";
import ReactToPrint from "react-to-print";
// import Resumetemp from "../resume temp/Resumetemp";
import Resumetemp2 from "../Resume temp 2/Resumetemp2";
import Navbar from "../../Navbar/Navbar";

import styles from "./Body.module.css";

function Body() {
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    skills: "Skills",
    summary: "Summary",
    other: "Other",
  };
  const resumeRef = useRef();

  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.skills]: {
      id: sections.skills,
      sectionTitle: sections.skills,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });

  return (

    <div className={`${styles.main} flex `} >
        <p className={styles.heading}>Resume Builder</p>
        <div className={styles.toolbar}>

        </div>
        <div className={`${styles.innerMain} flex`}>
          <Editor
            sections={sections}
            information={resumeInformation}
            setInformation={setResumeInformation}
          />
          <Resumetemp2
            ref={resumeRef}
            sections={sections}
            information={resumeInformation}
          />
          
        </div>
        <ReactToPrint
            trigger={() => {
              return (
                <button className={styles.button}>
                  Download
                </button>
              );
            }}
            content={() => resumeRef.current}
          />
    </div >
  );
}

export default Body;
