import React from 'react';
import InstaSlide from '../../components/InstaSlide/InstaSlide';

import './Home.css';

export default function Home() {
  return (
    <main className='home main-bg'>
      <InstaSlide dark={true} topic_name='TECH NEWS' slide_num='01' />
    </main>
  );
}
