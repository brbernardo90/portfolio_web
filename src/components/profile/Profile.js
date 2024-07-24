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
                    <h2>Hello</h2>
                    <p>A Bit About Me</p>
                    <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                </div>
                <div className="buttons-container">
                    <button className="btn resume">Resume</button>
                    <button className="btn skills">Skills</button>
                    <button className="btn projects">Projects</button>
                    <button className="btn contact">Contact</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;