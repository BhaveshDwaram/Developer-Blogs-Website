import React, { useState } from 'react';
import Testimonials from '../../components/testimonials/Testimonials';
import Techstack from '../../components/Techstack/Techstack';
import Banner from '../../components/banner/Banner';
import TypewriterExample from '../../components/typewriterExample/TypewriterExample';
import FeatureComponent from '../../components/features/Features';

const Homing = () => {
  const [typewriterCompleted, setTypewriterCompleted] = useState(false);

  return (
    <div className='Hometext'>
      {!typewriterCompleted ? (
        <div className="TypewriterExample">
          <TypewriterExample onComplete={() => setTypewriterCompleted(true)} />
        </div>
      ) : (
        <div>
          <Banner />
          <FeatureComponent />
          <Techstack />
          <Testimonials />
        </div>
      )}
    </div>
  );
};

export default Homing;
