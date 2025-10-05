import React, { Component } from 'react';
import {
  SiTerraform,
  SiDocker,
  SiGithubactions,
  SiDatadog
} from 'react-icons/si';
import {
  FaCloud,
  FaServer,
  FaDatabase,
  FaNetworkWired,
  FaChartLine,
  FaCog,
  FaRocket
} from 'react-icons/fa';
import { AiOutlineApi } from 'react-icons/ai';
import { DiAws } from 'react-icons/di';
import './Tools.css';

class Tools extends Component {
  getIconComponent(iconName) {
    const iconMap = {
      'terraform': SiTerraform,
      'opentofu': SiTerraform,
      'aws': DiAws,
      'ecs': FaServer,
      's3': FaDatabase,
      'cloudformation': FaCloud,
      'lambda': FaRocket,
      'apigateway': AiOutlineApi,
      'route53': FaNetworkWired,
      'cloudwatch': FaChartLine,
      'datadog': SiDatadog,
      'scalr': FaCog,
      'github': SiGithubactions,
      'seed': FaRocket,
      'sst': FaRocket,
      'docker': SiDocker
    };

    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className="tool-icon" alt={iconName} /> : null;
  }

  render() {
    const resumeData = this.props.resumeData;
    const tools = resumeData?.tools || [];

    return (
      <section id="tools">
        <div className="container">
          <h2 className="section-heading">Tools & Technologies</h2>
          <p className="section-description">
            Technologies and platforms I work with daily
          </p>

          <div className="tools-grid">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="tool-card"
                role="article"
                tabIndex={0}
                aria-label={`${tool.name}: ${tool.description || tool.name}`}
              >
                <div className="icon-container">
                  {tool.icon && this.getIconComponent(tool.icon)}
                </div>
                <h3 className="tool-name">{tool.name}</h3>
                {tool.description && (
                  <p className="tool-description">{tool.description}</p>
                )}
                {tool.category && (
                  <span className="tool-category-badge">{tool.category}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Tools;
