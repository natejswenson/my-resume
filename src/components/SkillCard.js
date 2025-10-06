import React from 'react';
import PropTypes from 'prop-types';
import { getIconComponent } from '../utils/iconMapper';
import './SkillCard.css';

/**
 * SkillCard Component
 * Displays a single skill with icon and name
 * Part of the flat, responsive Skills grid
 */
const SkillCard = ({ skill }) => {
  const IconComponent = getIconComponent(skill.icon);

  return (
    <div
      className="skill-card"
      role="article"
      tabIndex={0}
      aria-label={`${skill.name} skill`}
      data-skill-id={skill.id}
    >
      <div className="skill-card-icon-container">
        <IconComponent className="skill-card-icon" alt={skill.name} />
      </div>
      <h3 className="skill-card-name">{skill.name}</h3>
    </div>
  );
};

SkillCard.propTypes = {
  skill: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string
  }).isRequired
};

export default SkillCard;
