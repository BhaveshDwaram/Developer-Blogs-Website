
import Testimonials from '../../components/testimonials/Testimonials'
import Techstack from '../../components/techstack/Techstack'
import Banner from '../../components/banner/Banner'
import TypewriterExample from '../../components/typewriterExample/TypewriterExample'
import FeatureComponent from '../../components/features/Features'
import React, { useState } from 'react';

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
          
        </div>
      )}
      
      <FeatureComponent />
          <Techstack/>
          <Testimonials />
    </div>
  )
}

export default Homing