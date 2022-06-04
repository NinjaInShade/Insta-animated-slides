import React from 'react';
import InstaSlide from '../../components/InstaSlide/InstaSlide';
import './Home.css';

import EffectFour from '../../assets/4.png';

export default function Home() {
  return (
    <main className='home main-bg'>
      <InstaSlide
        slide_num='06'
        title='Effect #4'
        description='Mirror to box animation'
        img={EffectFour}
      />
    </main>
  );
}
