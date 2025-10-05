import React, { Component } from 'react';
import { GiBrain } from 'react-icons/gi';
import { FaInfinity, FaCloud, FaRobot } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import './Skills.css';

class Skills extends Component {
  getIconComponent(iconName) {
    const iconMap = {
      'brain': GiBrain,
      'cogs': IoMdSettings,
      'cloud': FaCloud,
      'robot': FaRobot,
      'infinity': FaInfinity
    };

    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className="skill-icon" alt={iconName} /> : null;
  }

  render() {
    const resumeData = this.props.resumeData;
    const skills = resumeData?.skills || [];

    return (
      <section id="skills">
        <div className="container">
          <h2 className="section-heading">Core Skills</h2>
          <p className="section-description">
            Key competencies and areas of expertise
          </p>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-card"
                role="article"
                tabIndex={0}
                aria-label={`${skill.name}: ${skill.description || skill.name}`}
              >
                <div className="icon-container">
                  {skill.icon && this.getIconComponent(skill.icon)}
                </div>
                <h3 className="skill-name">{skill.name}</h3>
                {skill.description && (
                  <p className="skill-description">{skill.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
