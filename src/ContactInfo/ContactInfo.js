import React from 'react';

import './ContactInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

export const ContactInfo = (props) => {
  return (
    <div className='contact-container'>
        <p>EMAIL: <a className='contact-link' href="mailto:makennadouglasart@gmail.com">makennadouglasart@gmail.com</a></p>
        <p><FontAwesomeIcon icon={ faCamera } className="insta-icon"/> INSTA: <a className='contact-link' href="https://www.instagram.com/o.g_petrichor/" target='_blank'>o.g_petrichor</a></p>
    </div>
  )
}
