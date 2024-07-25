import React from 'react';
import './skill.css'; 
import SkillBar from './SkillBar';

const Skill = () => {
    const skills = [
        { name: "Python", experience: 5 },
        { name: "Pytorch", experience: 3 },
        { name: "Docker", experience: 4 },
        { name: "GIT", experience: 6 }
    ];

    const maxExperience = Math.max(...skills.map(skill => skill.experience));

    return (
        <div className="resume">
            <div className='title_page'>
                <h1>Skills</h1>
            </div>
            <div className='sections'>
                <div className="section">
                    <div className='section_name'><h2>Machine Learning</h2></div>
                    <div className="educations">
                        <div className="education">
                            <div className='education_description'>
                                <div className="degree">Languages N' Frameworks</div>
                                <div className='skill_items'>
                                    <div>
                                        {skills.map(skill => (
                                            <SkillBar key={skill.name} skill={skill} maxExperience={maxExperience} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="education">
                        

                            <div className='education_description'>
                            <div className="degree">Libraries</div>
                            <div className='skill_items'>
                                    <ul>
                                        <li>Python</li>
                                        <li>Pytorch</li>
                                    </ul>
                                </div>
                        </div>
                        </div>
                        <div className="education">
                        

                            <div className='education_description'>
                                <div className="degree">Databases</div>
                                <div className='skill_items'>
                                    <ul>
                                        <li>Python</li>
                                        <li>Pytorch</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="education">
                        

                            <div className='education_description'>
                                <div className="degree">Productivity</div>
                                <div className='skill_items'>
                                    <ul>
                                        <li>Docker</li>
                                        <li>GIT</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="section">
                    <div className='section_name'><h2>Full Stack</h2></div>
                    <div className="educations">
                        <div className="education">
                            <div className='education_description'>
                                <div className="degree">Languages N' Frameworks</div>
                                <div className='skill_items'>
                                    <ul>
                                        <li>Python</li>
                                        <li>Pytorch</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="education">
                        

                            <div className='education_description'>
                            <div className="degree">Frameworks/Libraries</div>
                            <div className='skill_items'>
                                    <ul>
                                        <li>Python</li>
                                        <li>Pytorch</li>
                                    </ul>
                                </div>
                        </div>
                        </div>
                        <div className="education">
                        

                            <div className='education_description'>
                                <div className="degree">Databases</div>
                                <div className='skill_items'>
                                    <ul>
                                        <li>Python</li>
                                        <li>Pytorch</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="education">
                        

                            <div className='education_description'>
                                <div className="degree">Productivity</div>
                                <div className='skill_items'>
                                    <ul>
                                        <li>Python</li>
                                        <li>Pytorch</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="section">
                    <div className='section_name'><h2>Quality Assurance</h2></div>
                    <div className="educations">
                        <div className="education">
                            <div className='education_description'>
                                <div className="degree">Languages N' Frameworks</div>
                                <div className='skill_items'>
                                    <ul>
                                        <li>Python</li>
                                        <li>Pytorch</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="education">
                        

                            <div className='education_description'>
                            <div className="degree">Frameworks/Libraries</div>
                            <p>Establishment Name | I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                        </div>
                        </div>
                        <div className="education">
                        

                            <div className='education_description'>
                                <div className="degree">Databases</div>
                                <p>Establishment Name | I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                            </div>
                        </div>

                        <div className="education">
                        

                            <div className='education_description'>
                                <div className="degree">Productivity</div>
                                <p>Establishment Name | I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;


// JavaScript, TypeScript, HTML,
// CSS/Sass

// Vue.js, Angular, Node.js,
// Express.js, Mocha, Chai,
// Sinon.js. Testing Library

// MongoDB, Postgresql
// Productivity
// Git, Linux, Docker, SCRUM