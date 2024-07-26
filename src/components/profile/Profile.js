import React from 'react';
import './profile.css';

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="image-contact">
                <div className="image-container">
                    <img src="profile_photo1.jpeg" alt="Nicol Rider" />       
                </div>
               
            </div>
            <div className="info-container">
                <div className="text-container">
                    <h2>Hello, my name is Brayan Bernardo.</h2>
                    <p> I'm a curious software engineer with a background in <b>Machine Learning Research</b>, <b>Full Stack Web Development</b>, and <b>Quality Assurance</b>. </p>
                    <p> With a strong foundation in software development and artificial intelligence, I'm passionate about using my expertise to solve real-world challenges. My career has been a diverse adventure, contributing to impactful projects in the tech industry, academia, and social movements, each enriching my journey with valuable lessons and experiences.</p>
                </div>
                <div className='button-contact'>
                    <div className="buttons-container">
                        <button className="btn btn-resume"><a href='/resume' > RESUME </a></button>
                        {/* <button className="btn skills">Skills</button> */}
                        <button className="btn btn-projects"><a href='/projects' > PROJECTS </a></button>
                        {/* <button className="btn contact">Contact</button> */}
                    </div>

                    <div className="contact-section">
                                {/* <h4>Follow Me</h4> */}
                                <a href="https://www.linkedin.com/in/brayan-bernardo" target="_blank" rel="noopener noreferrer"> <img src='	https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white' /></a>
                                <a href="https://github.com/brbernardo90" target="_blank" rel="noopener noreferrer"> <img src='	https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white' /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;