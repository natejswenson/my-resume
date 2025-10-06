import React, { Component } from 'react';
import SkillCard from './SkillCard';
import { skillsData } from '../data/skillsData';
import './Skills.css';

/**
 * Skills Component
 * Displays a responsive grid of skill cards
 * Flat structure - no hierarchies, no descriptions
 */
class Skills extends Component {
  render() {
    return (
      <section id="skills">
        <div className="container">
          <h2 className="section-heading">Skills</h2>

          <div className="skills-grid">
            {skillsData.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
