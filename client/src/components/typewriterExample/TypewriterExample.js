import React from 'react';
import Typewriter from 'typewriter-effect';
import './TypewriterExample.css';

const TypewriterExample = ({ onComplete }) => {
  const handleTypingComplete = () => {
    if (onComplete) {
      onComplete();
    }
  };

  return (
    <div className='typewriter-container'>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('Hello')
            .pauseFor(1000)
            .deleteAll()
            .typeString('Welcome to')
            .pauseFor(1000)
            .deleteAll()
            .typeString('Developer Blogs...')
            .pauseFor(1000)
            .start()
            .callFunction(handleTypingComplete);
        }}
        options={{
          autoStart: true,
          loop: false,
        }}
      />
    </div>
  );
};

export default TypewriterExample;
