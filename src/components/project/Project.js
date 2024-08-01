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
                                        src='logos/feec.jpeg' 
                                        width='50px'
                                        height='30px'  
                                    />
                                </div>
                            <div className="dates">2022 - Present</div>
                            </div>
                            
                            <div className='job_description'>
                                <div className="title"> Master degree research <span>at</span> <a href="https://www.fee.unicamp.br/">FEEC</a></div>
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
                                        src='logos/mnh.png' 
                                        width='50px'
                                        height='30px'
  
                                    />                    
                                </div>
                                
                                <div className="dates">03/2024 - 11/2024</div>
                            </div>
                            
                            <div className='job_description'>
                                <div className="title">Web Developer <span>at</span> Movimento Negro de Heliópolis</div>
                                <p> As a contractor, I am actively developing the web platform for the "Movimento Negro de Heliópolis," a significant local social movement. This platform, built using open-source technologies such as WordPress and Tainacan, will feature a comprehensive digital repository. This platform is designed to include a comprehensive digital repository, which will serve as a crucial resource for archiving and sharing the movement's historical documents, multimedia content, and other valuable information. This project not only supports the preservation of cultural heritage but also enhances accessibility and engagement within the community. </p>
                                <div className='badges'>
                                    <img src='https://img.shields.io/badge/WordPress-%23117AC9.svg?style=for-the-badge&logo=WordPress&logoColor=white'></img>
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
