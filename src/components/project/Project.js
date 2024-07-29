import React from 'react';
import './project.css'; 

const Project = () => {
    return (
        <div className="project">
            <div className='sections'>
                <div className='sections_header'>
                    <div className='title_page'>
                        <h1>Projects</h1>
                    </div>
                    <hr></hr>
                </div>
                <div className="section">

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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
