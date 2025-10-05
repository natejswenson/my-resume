import React, { Component } from 'react';
import './Tools.css';

class Tools extends Component {
  render() {
    const resumeData = this.props.resumeData;
    const tools = resumeData?.tools || [];

    return (
      <section id="tools">
        <div className="container">
          <h2 className="section-heading">Tools & Technologies</h2>
          {tools.map((category, catIndex) => (
            <div key={catIndex} className="tool-category">
              <h3 className="category-heading">{category.category}</h3>
              <div className="tools-container">
                {category.items.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="tool-pill"
                    role="button"
                    tabIndex={0}
                    aria-label={tool}
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Tools;
