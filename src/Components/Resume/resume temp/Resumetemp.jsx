import "./Resumetemp.css"
import React, { forwardRef, useEffect, useRef, useState } from "react";
import {
  AtSign,
  Calendar,
  GitHub,
  Linkedin,
  MapPin,
  Paperclip,
  Phone,
} from "react-feather";

const Resumetemp = forwardRef((props, ref) => {

  const information = props.information;
  const sections = props.sections;
  const containerRef = useRef();

  // const [columns, setColumns] = useState([[], []]);
  // const [source, setSource] = useState("");
  // const [target, seTarget] = useState("");

  const info = {
    workExp: information[sections.workExp],
    project: information[sections.project],
    skills: information[sections.skills],
    education: information[sections.education],
    basicInfo: information[sections.basicInfo],
    summary: information[sections.summary],
    other: information[sections.other],
  };

  const getFormattedDate = (value) => {
    if (!value) return "";
    const date = new Date(value);

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!props.activeColor || !container) return;

    container.style.setProperty("--color", props.activeColor);
  }, [props.activeColor]);

  return (
    <div ref={ref}>
      <div ref={containerRef} className="resume-wrapper">
        <article className="paper">
          <header className="rtheader">
            <div className="header-content">
              <div className="header-pic" title="Wiggle Wiggle">
                <div className="pic"></div>
              </div>
              <div className="header-text">
                <p className="rt-p">{info.basicInfo?.detail?.name}
                </p>
                <p className="subtitle">{info.basicInfo?.detail?.title}</p>
              </div>
            </div>
          </header>

          <div className="content-wrapper">

            {/* <!-- CONTACT --> */}
            <section className="content">
              <div className="row">
                <div className="content-cat">
                  Contact
                </div>
                <div className="content-text">

                  <ul>
                    <li>Email</li>
                    <li>{info.basicInfo?.detail?.email ? (
                      <a>  {info.basicInfo?.detail?.email} </a>
                    ) : (
                      <span />
                    )}</li>
                  </ul>
                  <ul>
                    <li>Phone</li>
                    <li>{info.basicInfo?.detail?.phone ? (
                      <a >
                        {info.basicInfo?.detail?.phone}
                      </a>
                    ) : (
                      <span />
                    )}</li>
                  </ul>

                </div>
              </div>
            </section>

            {/* <!-- LOCATION --> */}
            {/* <section className="content">
              <div className="row">
                <div className="content-cat">
                  Location
                </div>
                <div className="content-text">
                  <ul>
                    <li>Address</li>
                    <li>Some street</li>
                  </ul>
                  <ul>
                    <li>Postal Code</li>
                    <li>12345</li>
                  </ul>
                  <ul>
                    <li>City</li>
                    <li>Ulm</li>
                  </ul>
                  <ul>
                    <li>Region</li>
                    <li>Baden-Württemberg</li>
                  </ul>
                </div>
              </div>
            </section> */}

            {/* <!-- PROFILES --> */}
            <section className="content">
              <div className="row">
                <div className="content-cat">
                  Profiles
                </div>
                <div className="content-text">
                  <ul>
                    <li>LinkedIn</li>
                    <li>{info.basicInfo?.detail?.linkedin ? (
                      <a >
                        <Linkedin /> {info.basicInfo?.detail?.linkedin}
                      </a>
                    ) : (
                      <span />
                    )}</li>
                  </ul>
                  <ul>
                    <li>GithHub</li>
                    <li>
                      {info.basicInfo?.detail?.github ? (
                        <a >
                          <GitHub /> {info.basicInfo?.detail?.github}
                        </a>
                      ) : (
                        <span />
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="content">
              <div className="row">
                <div className="content-cat big-text">
                  Self-employed
                  <p className="cc-p">2012-05-01 till today</p>
                </div>
                <div className="content-text work-listing">
                  <p className="cc-p">Hondrt.de is a small business enterprise (dt. Kleingewerbe) specializing in serving technical needs of local customers. For example building corporate homepages, technical consulting and programming.</p>
                  <p className="highlight">Implemented and marketed Timedoublr.com, a flexible time tracking app for Apple iOS</p>
                  <p className="highlight">Consulted a medium-sized business in establishing their media presence</p>
                </div>
              </div>
            </section>
            <section className="content">
              {info.workExp?.details?.map((item) => (
                <div className="row">
                  {/* {item.title ? (
                                            <p >{item.title}</p>
                                        ) : (
                                            <span />
                                        )} */}
                  <div className="content-cat big-text">
                    {item.companyName ? (
                      <p className=" big-text">{item.companyName}</p>
                    ) : (
                      <span />
                    )}
                    <p className="cc-p expdates">{item.startDate && item.endDate ? (
                      <div >{getFormattedDate(item.startDate)}-
                        {getFormattedDate(item.endDate)}
                      </div>
                    ) : (
                      <div />
                    )}</p>
                  </div>
                  <div className="content-text work-listing">
                    <p className="cc-p">{item.points?.length > 0 ? (
                      <ul >
                        {item.points?.map((elem, index) => (
                          <li key={elem + index}>
                            {elem}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <span />
                    )}</p>
                    <p className="highlight">{item.points?.length > 0 ? (
                      <ul >
                        {item.points?.map((elem, index) => (
                          <li key={elem + index}>
                            {elem}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <span />
                    )}</p>
                  </div>
                </div>
              ))}
            </section>

            <section className="content">
              <div className="row">
                <div className="content-cat">
                  Education
                  {info.education?.details?.map((item) => (
                    <p className="cc-p , edudates">{item.startDate && item.endDate ? (
                      <div >{getFormattedDate(item.startDate)} -
                        {getFormattedDate(item.endDate)}
                      </div>
                    ) : (
                      ""
                    )}

                    </p>
                  ))}
                </div>
                <div className="content-text work-listing education-listing">
                  {info.education?.details?.map((item) => (
                    <p className="heading">{item.college ? (
                      <p >{item.college}</p>
                    ) : (
                      <span />
                    )}</p>
                  ))}
                  {info.education?.details?.map((item) => (
                    <p className="highlight">{item.title ? (
                      <p >{item.title}</p>
                    ) : (
                      <span />
                    )}</p>
                  ))}
                </div>
              </div>
            </section>

            <section className="content">
              <div className="row">
                <div className="content-cat big-text">
                  Awards
                  <p className="cc-p">Best Usability</p>
                  <p style={{ marginTop: "0.25em" }}>2013-07-13</p>
                </div>
                <div className="content-text work-listing education-listing">
                  <p className="heading">Faculty of Engineering and Computer Science at Ulm University:</p>
                  <p className="highlight">For developing Module Management System (MMS) a content management system for module handbooks introduced as part of the Bologna Process.</p>
                </div>
              </div>
            </section>

            <section className="content">
              <div className="row">
                <div className="content-cat big-text">
                  Skills
                </div>
                <div className="content-text skills-listing">
                  <ul>
                    <li>
                      {info.skills.points[0]}
                    </li>
                    <li>
                      {info.skills.points[1]}
                    </li>
                  </ul>
                  <ul>
                    <li>
                      {info.skills.points[2]}
                    </li>
                    <li>
                      {info.skills.points[4]}
                    </li>
                    <li>
                      {info.skills.points[5]}
                    </li>
                  </ul>
                </div>
              </div>
            </section>

          </div>

        </article>

      </div>
    </div>
  )
});
export default Resumetemp