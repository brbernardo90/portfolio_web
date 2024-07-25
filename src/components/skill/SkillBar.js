import React from 'react';
import './skill_bar.css'; // Make sure to create this CSS file

const SkillBar = ({ skill, maxExperience }) => {
    const width = (skill.experience / maxExperience) * 100; // Calculates width based on max experience

    return (
        <div className="skill-bar-container">
            <label>{skill.name}</label>
            <div className="skill-bar">
                <div className="skill-bar-fill" style={{ width: `${width}%` }}>
                    {skill.experience} years
                </div>
            </div>
        </div>
    );
};

export default SkillBar;
