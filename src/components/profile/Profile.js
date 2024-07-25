import React from 'react';
import './profile.css';

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="image-container">
                <img src="profile_photo1.jpeg" alt="Nicol Rider" />
            </div>
            <div className="info-container">
                <div className="text-container">
                    <h2>Hello, my name is Brayan Bernardo.</h2>
                    <p> I'm a curious software engineer with a background in Machine Learning Research, Full Stack Web Development, and Quality Assurance. </p>
                    <p> My solid foundation in software development and artificial intelligence allows me to apply my skills effectively to solve real-world problems. Throughout my career, I've contributed to diverse projects in the tech industry, academia, and social movements.</p>
                </div>
                <div className="buttons-container">
                    <button className="btn resume"><a href='/resume' > Resume </a></button>
                    <button className="btn skills">Skills</button>
                    <button className="btn projects">Projects</button>
                    <button className="btn contact">Contact</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;