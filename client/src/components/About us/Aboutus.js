import React from 'react';
import './Aboutus.css'; // Import your CSS file

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="big-card">
        <h2 className="green-text">About Us</h2>
        <div className="small-cards">
          <div className="card">
            <div className="card-content">
              <h3 className="section-heading">Who We Are</h3>
              <p className="section-description">
                We're not just another tech platform. We're a community of passionate coders, designers, and innovators united by our love for crafting elegant solutions to complex problems. Together, we're reshaping the future of technology, one line of code at a time.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3 className="section-heading">Our Mission</h3>
              <p className="section-description">
                Our mission is simple yet profound: to empower every individual with the tools and knowledge they need to thrive in the digital age. Through accessible education, collaborative projects, and unwavering support, we're breaking down barriers and paving the way for a more inclusive and innovative tech industry.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3 className="section-heading">Why Choose Us</h3>
              <p className="section-description">
                Choosing us means choosing excellence, community, and growth. From our meticulously curated content to our vibrant online forums, we're committed to providing an unparalleled learning experience. Join us on this exhilarating journey, and together, let's push the boundaries of what's possible in tech.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
