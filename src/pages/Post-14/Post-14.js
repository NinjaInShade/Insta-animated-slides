import React from 'react';
// import FunctionGif from '../../assets/function_gen.gif';
// import DataGen from '../../assets/data_gen.gif';
// import DataSorting from '../../assets/data_sorting.gif';
// import FetchingData from '../../assets/fetching_data.gif';
// import ReactGif from '../../assets/react.gif';
import InstaSlide from '../../components/InstaSlide/InstaSlide';

import './Post-14.css';

export default function Home() {
  return (
    <main className='container main-bg'>
      <InstaSlide
        dark={false}
        topic_name='TECH NEWS'
        slide_num='02'
        title='Generate functions'
        description='Type a function name or describe in a comment'
      >
        {/* <img src={FunctionGif} className='copilot-vid' alt='Github copilot example' /> */}
      </InstaSlide>
      {/* <InstaSlide
        dark={true}
        topic_name='TECH NEWS'
        slide_num='03'
        title='Generate test data'
        description='Generate quick data for test uses'
      >
        <img src={DataGen} className='copilot-vid' alt='Github copilot example' />
      </InstaSlide> */}
      {/* <InstaSlide
        dark={false}
        topic_name='TECH NEWS'
        slide_num='04'
        title='Sort data'
        description='Can create complicated functions to manipulate data'
      >
        <img src={DataSorting} className='copilot-vid' alt='Github copilot example' />
      </InstaSlide> */}
      {/* <InstaSlide
        dark={true}
        topic_name='TECH NEWS'
        slide_num='05'
        title='Fetch data from APIs'
        description='Gives intelligent completions based on the data too!'
      >
        <img src={FetchingData} className='copilot-vid' alt='Github copilot example' />
      </InstaSlide> */}
      {/* <InstaSlide
        dark={false}
        topic_name='TECH NEWS'
        slide_num='06'
        title='Works for react'
        description='EG. based on component it gives state completions'
      >
        <img src={ReactGif} className='copilot-vid' alt='Github copilot example' />
      </InstaSlide> */}
    </main>
  );
}
