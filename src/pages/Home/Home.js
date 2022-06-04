import React from 'react';
import InstaSlide from '../../components/InstaSlide/InstaSlide';

import './Home.css';

export default function Home() {
  return (
    <main className='home main-bg'>
      <InstaSlide
        slide_num='01'
        title='HTML'
        description='A lot of luxurious designs break out grid....'
      >
        {/* <img src={CopilotImg} className='copilot-img' alt='Github copilot example' />
        <p className='copilot-caption'>
          “Trained on billions of lines of public code, GitHub Copilot puts the knowledge you need at your fingertips,
          saving you time and helping you stay focused.”
        </p> */}
      </InstaSlide>
    </main>
  );
}
