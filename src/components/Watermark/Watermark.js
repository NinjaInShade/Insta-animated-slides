import React from 'react';
import Logo from '../../assets/logo.svg';
import './Watermark.css';

export default function Watermark({ dark }) {
  return (
    <div className={`watermark-container ${dark && 'watermark-container-dark'}`}>
      <div className='watermark-circle'>
        <img src={Logo} className='watermark-logo' alt='Frontend Guy logo' />
      </div>
      <div>
        <p className='watermark-name'>TheFrontendGuy</p>
        <p className='watermark-handle'>@thefrontendguy</p>
      </div>
    </div>
  );
}
