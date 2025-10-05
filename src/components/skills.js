import React, { Component } from 'react';
import './Skills.css';

class Skills extends Component {
  render() {
    const resumeData = this.props.resumeData;
    const skills = resumeData?.skills || [];

    return (
      <section id="skills">
        <div className="container">
          <h2 className="section-heading">Core Skills</h2>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-pill"
                role="button"
                tabIndex={0}
                aria-label={skill.name}
              >
                {skill.icon && <i className={`icon-${skill.icon}`} aria-hidden="true"></i>}
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
