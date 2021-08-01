import React from 'react';
import CopilotImg from '../../assets/copilot.png';
import InstaSlide from '../../components/InstaSlide/InstaSlide';

import './Home.css';

export default function Home() {
  return (
    <main className='home main-bg'>
      <InstaSlide
        dark={true}
        topic_name='TECH NEWS'
        slide_num='01'
        title='This is the future!'
        description='Get suggestions for whole lines or entire functions right inside your editor.'
      >
        <img src={CopilotImg} className='copilot-img' alt='Github copilot example' />
        <p className='copilot-caption'>
          “Trained on billions of lines of public code, GitHub Copilot puts the knowledge you need at your fingertips,
          saving you time and helping you stay focused.”
        </p>
      </InstaSlide>
    </main>
  );
}
