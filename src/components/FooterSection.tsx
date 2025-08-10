import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faYoutube,
  faFacebook,
  faGithub,
  faXTwitter
} from '@fortawesome/free-brands-svg-icons';

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <nav>
        <ul className='nav-features'>
          <li><a className='footer-nav-item' href='#'>Features</a></li>
          <li><a className='footer-nav-item' href='#'>Pricing</a></li>
          <li><a className='footer-nav-item' href='#'>About us</a></li>
          <li><a className='footer-nav-item' href='#'>Contact</a></li>
        </ul>
      </nav>
      <div className='social-links'>
        <a className='footer-social-item' href='https://instagram.com' aria-label='Instagram'>
          <FontAwesomeIcon icon={faInstagram} size='lg' />
        </a>
        <a className='footer-social-item' href='https://youtube.com' aria-label='YouTube'>
          <FontAwesomeIcon icon={faYoutube} size='lg' />
        </a>
        <a className='footer-social-item' href='https://facebook.com' aria-label='Facebook'>
          <FontAwesomeIcon icon={faFacebook} size='lg' />
        </a>
        <a className='footer-social-item' href='https://github.com' aria-label='GitHub'>
          <FontAwesomeIcon icon={faGithub} size='lg' />
        </a>
        <a className='footer-social-item' href='https://x.com' aria-label='X'>
          <FontAwesomeIcon icon={faXTwitter} size='lg' />
        </a>
      </div>
      <p>&copy; {year} Yazan Sulaiman</p>
    </footer>
  );
}
