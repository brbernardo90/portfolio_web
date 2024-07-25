import React from 'react';
import SkillBar from './SkillBar';

const Skills = () => {
    const skills = [
        { name: "Python", experience: 5 },
        { name: "Pytorch", experience: 3 },
        { name: "Docker", experience: 4 },
        { name: "GIT", experience: 6 }
    ];

    const maxExperience = Math.max(...skills.map(skill => skill.experience));

    return (
        <div>
            {skills.map(skill => (
                <SkillBar key={skill.name} skill={skill} maxExperience={maxExperience} />
            ))}
        </div>
    );
};

export default Skills;