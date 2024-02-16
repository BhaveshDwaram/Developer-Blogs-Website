// FeatureComponent.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faPencilAlt, faComment } from '@fortawesome/free-solid-svg-icons';
import './Features.css';

const FeatureComponent = () => {
  return (
    <div className="feature-container">
      <div className="feature">
        <FontAwesomeIcon icon={faLightbulb} className="feature-icon" />
        <h3 className="feature-title">Inspiring Content</h3>
        <p className="feature-description">Discover articles that inspire and enlighten.</p>
      </div>

      <div className="feature">
        <FontAwesomeIcon icon={faPencilAlt} className="feature-icon" />
        <h3 className="feature-title">Quality Writing</h3>
        <p className="feature-description">Experience high-quality writing from our authors.</p>
      </div>

      <div className="feature">
        <FontAwesomeIcon icon={faComment} className="feature-icon" />
        <h3 className="feature-title">Engage with Community</h3>
        <p className="feature-description">Participate in discussions and connect with other readers.</p>
      </div>
    </div>
  );
};

export default FeatureComponent;
