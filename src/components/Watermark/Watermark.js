import React from 'react';
import Logo from '../../assets/logo.svg';
import './Watermark.css';

export default function Watermark({ dark }) {
  return (
    <div className={`watermark-container ${dark && 'watermark-container-dark'}`}>
      <div className='watermark-circle'>
        <img src={Logo} className='watermark-logo' alt='LM Developer logo' />
      </div>
      <div>
        <p className='watermark-name'>LM Development</p>
        <p className='watermark-handle'>@lmdeveloper</p>
      </div>
    </div>
  );
}
