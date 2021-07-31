import React from 'react';
import Watermark from '../Watermark/Watermark';
import './InstaSlide.css';

export default function InstaSlide({ dark, topic_name, slide_num, title, description }) {
  return (
    <section className={`insta-slide ${dark && 'insta-slide-dark'}`}>
      <header className='insta-slide-header'>
        <strong className='insta-slide-topic'>{topic_name}</strong>
        <strong className='insta-slide-num'>{slide_num}</strong>
      </header>
      <main className='insta-slide-content'></main>
      <div className='insta-slide-watermark'>
        <Watermark dark={dark} />
      </div>
    </section>
  );
}
