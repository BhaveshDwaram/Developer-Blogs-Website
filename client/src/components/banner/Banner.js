// Banner.js
import React from "react";
import "./Banner.css";


const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <h1 className="banner-title">
          {" "}
          A Website that helps <br /> developers to write blogs
        </h1>
        <div className="banner-section-total">
          <div className="banner-section">
            <h2 className="banner-subtitle">Community Engagement</h2>
            <p className="banner-description">
              Join our vibrant community of <br /> developers and engage in
              discussions, <br /> share insights, and collaborate on projects.
            </p>
          </div>
          <div className="banner-section">
            <h2 className="banner-subtitle">Expert Insights</h2>
            <p className="banner-description">
              Access expert articles and <br />
              tutorials covering a wide range of topics, <br />
              curated to help developers enhance their skills and stay updated
              with industry trends.
            </p>
          </div>
          <div className="banner-section">
            <h2 className="banner-subtitle">Career Development</h2>
            <p className="banner-description">
              Find resources and guidance to <br />
              advance your career in software development, <br /> including
              interview tips, resume writing, and professional networking.
            </p>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Banner;
