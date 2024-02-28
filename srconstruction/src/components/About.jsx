import { useState } from 'react';
import s from "../images/s.jpg";

export default function About() {
    const [activeTab, setActiveTab] = useState('skills');

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <div id="about">
                <div className="container">
                    <div className="row">
                        <div className="about-col-1">
                            <img src={s} alt="Profile" />
                        </div>
                        <div className="about-col-1">
                            <h1 className="sub-title">About me!</h1>
                            <p>Our services typically involve planning, designing, and executing
                                the construction or renovation of buildings and infrastructure. This can include residential,
                                commercial, or industrial projects. Construction services may encompass various activities
                                such as site preparation, foundation work, structural development, plumbing, electrical work, and finishing touches.
                                Companies providing construction services often manage the entire construction process, ensuring adherence to regulations
                                and safety standards.</p>

                            <div className="tab-titles">
                                <p className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} onClick={() => openTab('skills')}>Skills</p>
                                <p className={`tab-links ${activeTab === 'Experience' ? 'active-link' : ''}`} onClick={() => openTab('Experience')}>Experience</p>
                                <p className={`tab-links ${activeTab === 'Education' ? 'active-link' : ''}`} onClick={() => openTab('Education')}>Education</p>
                            </div>
                            <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
                                <ul>
                                    <li><span>Auto</span><br />CAD</li>
                                    <li><span></span><br /></li>
                                    <li><span>ererer</span><br />civil</li>
                                </ul>
                            </div>
                            <div className={`tab-contents ${activeTab === 'Education' ? 'active-tab' : ''}`} id="Education">
                                <ul>
                                    <li><span>B.E</span><br />CIVIL ENGINEERING</li>
                                    <li><span>Education</span><br />civil</li>
                                    <li><span>Education</span><br />civil</li>
                                </ul>
                            </div>
                            <div className={`tab-contents ${activeTab === 'Experience' ? 'active-tab' : ''}`} id="Experience">
                                <ul>
                                    <li><span>Construction of 'Sengodampalayam' Government school building(RMSA-type-II)</span><br />Under NABARD scheme at Sengodampalayam in erode<br />Completed</li>
                                    <li><span>Construction of Thindal higher sec School at Thindal</span><br />Erode , Completed</li>
                                    <li><span>Construction of compound wall(Retaining wall) of about 165ft and special work</span><br />(paver blocks, main gate and grills)for a BC girls hostel at Chithode , erode district was completed</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
