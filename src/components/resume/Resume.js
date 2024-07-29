import React from 'react';
import './resume.css'; 

const Resume = () => {
    return (
        <div className="resume">
            <div className='sections'>
                <div className='sections_header'>
                    <div className='title_page'>
                        <h1>Resume</h1>
                    </div>
                    <div class="resume-download">
                        <a href="cv_brayanbernardo.pdf" download="cv_brayanbernardo">
                            
                            <img className='pdf_icon' src='pdf-svgrepo-com.svg' /> 

                        </a>
                    </div>
                    <hr></hr>
                </div>
                <div className="section">

                    <div className='section_name'><h2>Work <br/> Experience</h2></div>

                    <div className='jobs' >
                        <div className="job">
                            <div className='photo_period'>
                                <div className="photo">
                                    <img 
                                        src='https://hiaac.unicamp.br/wp-content/themes/hiaac_portal/assets/images/logo.svg' 
                                        width='50px'
                                        height='30px'  
                                    />
                                </div>
                            <div className="dates">2023 - Present</div>
                            </div>
                            
                            <div className='job_description'>
                                <div className="title"> Research Associate <span>at</span> <a href="https://hiaac.unicamp.br/">H.IAAC</a></div>
                                <p>My research focuses on Machine Learning and Generative AI, specifically exploring the synthesis of realistic and expressive virtual avatars driven by speech and text inputs. I utilize advanced technologies and neural network architectures including Python, PyTorch, Docker, Generative Adversarial Networks (GANs), Variational Autoencoders (VAEs), and Large Language Models (LLMs).</p>
                                <p> See my last publication at <a href='https://propor2024.citius.gal/index.php/proceedings-2/'>PROPOR2024</a>: <a href='https://brbernardo90.github.io/bpsdth/'> Speech-Driven 2D Facial Animation Based on a Two-Stage Generative Framework </a> </p>
                                <div className='badges'>
                                    <img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" />
                                    <img src='https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white'></img>
                                    <img src='https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white'></img>
                                    <img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'></img>
                                    <img src=''></img>
                                    <img src=''></img>
                                    <img src=''></img>
                                </div>
                            </div>
                        </div>
                    
                        <div className="job">
                            <div className='photo_period'>
                                <div className="photo">
                                    <img 
                                        src='https://media.licdn.com/dms/image/D4D0BAQElEO0UAGnXMg/company-logo_200_200/0/1719833786365/caiena_tecnologia_e_design_logo?e=1729728000&v=beta&t=odAuw8kDsx0vXzHqpZ20Ke0mJ7pz8y8WI2Up-xybE8w' 
                                        width='50px'
                                        height='30px'
  
                                    />                    
                                </div>
                                
                                <div className="dates">2017 - 2023</div>
                            </div>
                            
                            <div className='job_description'>
                                <div className="title">Full Stack Developer <span>at</span> <a href="https://www.caiena.net/">Caiena</a></div>
                                <p> I specialize in implementing backend applications using Ruby on Rails, RESTful API patterns, and PostgreSQL, and in creating dynamic user interfaces with Vue.js and Vuex. Both backend and frontend developments adhere to Test-Driven Development (TDD) practices, with system tests developed using Cucumber and Capybara (BDD). My project management approach incorporates Scrum methodologies and the use of Jira software. Additionally, I conduct weekly training sessions for end-users, actively gathering their feedback to continuously improve the application's functionality and overall user experience.</p>
                                <div className='badges'>
                                    <img src='https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white'></img>
                                    <img src='https://img.shields.io/badge/Vue%20js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D'></img>
                                    <img src='https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white'></img>
                                    <img src='https://img.shields.io/badge/Cucumber-43B02A?style=for-the-badge&logo=cucumber&logoColor=white'></img>
                                    <img src='https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white'></img>
                                    <img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'></img>
                                </div>
                            
                            </div>
                        </div>

                        <div className="job">
                             <div className='photo_period'>
                                <div className="photo">
                                    <img 
                                        src='https://www.dieboldnixdorf.com/-/media/diebold/images/global/logo/dn-color-logo.svg' 
                                        
                                        
                                    />                    
                                </div>
                                
                                <div className="dates">2016 - 2017</div>
                            </div>
                            
                            <div className='job_description'>
                                <div className="title">Quality Assurance Engineer <span>at</span> <a href="https://dieboldnixdorf.com.br/" > Diebold Nixdorf </a></div>
                                <p>Planning and development of automated tests for web and mobile platforms (Android and iOS) using BDD methodology with tools such as Appium, Ruby (Capybara), and Cucumber. For desktop software testing, with BDD methodology using Python, Selenium, and Behave. Tests include AWS SQS and Lambda. Projects with Scrum methodology supported by JIRA.</p>
                                <div className='badges'>
                                    <img src='https://img.shields.io/badge/Cucumber-43B02A?style=for-the-badge&logo=cucumber&logoColor=white'></img>
                                    <img src='https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white'></img>
                                    <img src='https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue'></img>
                                    <img src='https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white'></img>
                                    <img src='https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white'></img>
                                    <img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'></img>
                                </div>
                            </div>
                        </div>
                        <div className="job">
                            <div className='photo_period'>
                                <div className="photo">
                                    <img 
                                        src='https://cdn.prod.website-files.com/64a2d32d985e1e3d89959e6a/64a41aa475d7602abf97e6e3_Sofist-Horizontal-RGB-p-500.png' 
                                        width='50px'
                                        height='30px'
                                        // style='object-position: -10% 20%;'
                                    />                    
                                </div>
                                
                                <div className="dates">2015 - 2016</div>
                            </div>
                            
                            <div className='job_description'>
                                <div className="title">Software Test Engineer <span>at</span> <a href="https://www.sofist.co/en" >Sofist</a></div>
                                <p> My responsibilities included automating test cases with tools like Java, Junit, Cucumber, and Mockito, and using databases like Cassandra and SQL Server. I handled tests across unit, integration, and system levels, applying various testing techniques such as white-box, black-box, and regression testing. Additionally, I conducted training workshops on unit testing for developers, helping improve testing practices within the team.</p>
                            
                                <div className='badges'>
                                    <img src='https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white'></img>
                                    <img src='https://img.shields.io/badge/Cucumber-43B02A?style=for-the-badge&logo=cucumber&logoColor=white'></img>
                                    <img src='https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white'></img>
                                    <img src='https://img.shields.io/badge/Cassandra-1287B1?style=for-the-badge&logo=apache%20cassandra&logoColor=white'></img>
                                    <img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="section">
                <div className='section_name'><h2>Education</h2></div>
                    <div className="educations">
                        <div className="education">
                            <div className='photo_period'>
                                <div className="photo">
                                    <img 
                                        src='http://www.unicamp.br/unicamp/sites/default/files/styles/large/public/Logo_Unicamp__0.jpg?itok=sO9EjTTS' 
                                        width='50px'
                                        height='30px'
  
                                    />                    
                                </div>
                                
                                <div className="dates">2022 - 2024</div>
                            </div>
                            
                            <div className='education_description'>
                                <div className="degree">Master’s Degree <span>at</span> <a href='https://www.unicamp.br/'>Universidade Estadual de Campinas (UNICAMP)</a></div>
                                <p>MSc, Electrical and Computer Engineering, Artificial Intelligence.</p>
                            </div>
                        </div>
                        <div className="education">
                            <div className='photo_period'>
                                <div className="photo">
                                    <img 
                                        src='https://upload.wikimedia.org/wikipedia/commons/2/2a/Ufscar-logo.png' 
                                        width='50px'
                                        height='30px'
  
                                    />                    
                                </div>
                                
                                <div className="dates">2009 - 2014</div>
                            </div>
                        
                            <div className='education_description'>
                            <div className="degree">Bachelor's Degree <span>at</span><a href='https://www.ufscar.br/a-ufscar'> UFSCAR</a></div>
                            <p>Computer Science.</p>
                        </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="section">
                <div className='section_name'><h2>Certifications</h2></div>
                    <div className="educations">
                        <div className="education">
                            <div className='photo_period'>
                                <div className="photo">
                                    <img 
                                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/768px-Microsoft_logo.svg.png' 
                                        width='50px'
                                        height='30px'
  
                                    />                    
                                </div>
                                
                                <div className="dates">Jun 2024</div>
                            </div>
                            
                            <div className='education_description'>
                                <div className="degree">Microsoft Certified: Azure AI Fundamentals</div>
                                <p>Microsoft - Credential ID B032A0209D1A8A10</p>
                            </div>
                        </div>
                        <div className="education">
                            <div className='photo_period'>
                                <div className="photo">
                                    <img 
                                        src='https://bstqb.online/img/logo/bstqb-cor-500.png' 
                                        width='50px'
                                        height='30px'
  
                                    />                    
                                </div>
                                
                                <div className="dates">Mar 2015</div>
                            </div>
                        
                            <div className='education_description'>
                            <div className="degree"> CTFL – Certified Tester Foundation Level   <span>by</span><a href='https://bstqb.online/'> BSTQB</a></div>
                            <p>Computer Science.</p>
                        </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="section">
                <div className='section_name'><h2>Volunteering</h2></div>
                    <div className="educations">
                        <div className="education">
                            <div className='photo_period'>
                                <div className="photo">
                                    <img 
                                        src='https://storage.googleapis.com/atados-v3/user-uploaded/images/0fc13b94-0371-40a9-ab45-7a7149e7a5e3.png' 
                                        width='50px'
                                        height='30px'
  
                                    />                    
                                </div>
                                
                                <div className="dates">01/2014 - 07/2014</div>
                            </div>
                        
                            <div className='education_description'>
                            <div className="degree">WebDeveloper & Fundraising - Fundacion Faidela (Argentina), Universidad ASTRAL (Chile) e Centro Integral Warmi (Bolivia)</div>
                            <p>Development of websites with Wordpress and Blogger;

School activities with children and teenagers.

Fundraising at local businesses and universities;

Production of advertising material;

Planning and execution of informative workshops.</p>
                        </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="section">
                <div className='section_name'><h2>Publications</h2></div>
                    <div className="educations">
                        <div className="education">
                            <div className='photo_period'>
                                <div className="photo">
                                    <img 
                                        src='https://propor2024.citius.gal/wp-content/uploads/2024/02/logoPropor.png' 
                                        width='50px'
                                        height='30px'
  
                                    />                    
                                </div>
                                
                                <div className="dates">Mar 2024</div>
                            </div>
                            
                            <div className='education_description'>
                                <div className="degree">A Speech-Driven Talking Head based on a Two-Stage Generative Framework</div>
                                <p><a href='https://aclanthology.org/2024.propor-1.64/' >Association for Computational Lingustics</a></p>
                                <p> Speech-driven facial animation, a technique employing speech signals as input, aims to generate realistic and expressive talking head animations. Despite advancements in talking head synthesis methods, challenges persist in terms of achieving precise control, robust generalization, and adaptability to various scenarios and speaker characteristics. Additionally, the majority of existing approaches are primarily tailored for a restricted range of languages, with English being the predominant focus. <a href='https://brbernardo90.github.io/bpsdth/' > More information. </a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/> 
                <div className="section">
                <div className='section_name'><h2>Languages</h2></div>
                    <div className="educations">
                        <div className="education">
                            <div className='photo_period'>
                                <div className="photo">
                  
                                </div>
                                
                                <div className="dates"></div>
                            </div>
                            
                            <div className='education_description'>
                                <div className="degree">English</div>
                                <p>Professional working proficiency.</p>
                            </div>
                        </div>
                        <div className="education">
                            <div className='photo_period'>
                                <div className="photo">
                   
                                </div>
                                
                                <div className="dates"></div>
                            </div>
                        
                            <div className='education_description'>
                            <div className="degree">Portuguese</div>
                            <p>Native or bilingual proficiency.</p>
                        </div>
                        </div>
                        <div className="education">
                            <div className='photo_period'>
                                <div className="photo">
                   
                                </div>
                                
                                <div className="dates"></div>
                            </div>
                        
                            <div className='education_description'>
                            <div className="degree">Spanish</div>
                            <p>Professional working proficiency.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
