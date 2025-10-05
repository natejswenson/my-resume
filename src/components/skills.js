import React, { Component } from 'react';
import { getIconComponent } from '../utils/iconMapper';
import { skillsData } from '../data/skillsData';
import './Skills.css';

class Skills extends Component {
  renderSkillCard(skill, index) {
    const IconComponent = getIconComponent(skill.icon);

    return (
      <div
        key={skill.id || index}
        className="skill-card"
        role="article"
        tabIndex={0}
        aria-label={`${skill.name}: ${skill.description || skill.name}`}
      >
        <div className="icon-container">
          <IconComponent className="skill-icon" alt={skill.name} />
        </div>
        <h3 className="skill-name">{skill.name}</h3>
        {skill.description && (
          <p className="skill-description">{skill.description}</p>
        )}

        {/* Render child skills if this is a parent */}
        {skill.isParent && skill.children && skill.children.length > 0 && (
          <div className="child-skills">
            {skill.children.map((child, childIndex) => {
              const ChildIcon = getIconComponent(child.icon);
              return (
                <div
                  key={child.id || childIndex}
                  className="child-skill-card"
                  role="article"
                  tabIndex={0}
                  aria-label={`${child.name}: ${child.description}`}
                >
                  <div className="child-icon-container">
                    <ChildIcon className="child-skill-icon" alt={child.name} />
                  </div>
                  <h4 className="child-skill-name">{child.name}</h4>
                  <p className="child-skill-description">{child.description}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  render() {
    // Use skillsData from import by default, but allow override via props for testing
    const skills = this.props.resumeData?.skills || skillsData;

    return (
      <section id="skills">
        <div className="container">
          <h2 className="section-heading">Core Skills</h2>
          <p className="section-description">
            Comprehensive technology stack and expertise
          </p>

          <div className="skills-grid">
            {skills.map((skill, index) => this.renderSkillCard(skill, index))}
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
