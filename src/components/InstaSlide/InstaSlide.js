import React from 'react';
import Watermark from '../Watermark/Watermark';
import Arrow from '../../assets/arrow.png';
import './InstaSlide.css';

export default function InstaSlide({ dark, slide_num, title, description, children }) {
  return (
    <section className={`insta-slide ${dark && 'insta-slide-dark'}`}>
      <header className='insta-slide-header'>
        <strong className='insta-slide-num'>{slide_num}</strong>
      </header>
      <main className='insta-slide-content'>
        <h1 className='insta-slide-content-title'>{title}</h1>
        <p className='insta-slide-content-description'>{description}</p>
        {children}
      </main>
      <div className='insta-slide-footer'>
        <Watermark dark={dark} />
        <div className='insta-slide-right'>
          <img src={Arrow} alt='Arrow to turn slide' />
        </div>
      </div>
    </section>
  );
}
