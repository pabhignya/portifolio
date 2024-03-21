// ContactComponent.js
import React from 'react';
import { useTheme } from './ThemeProvider';

function ContactComponent() {
  const { darkMode } = useTheme();

  return (
    <div style={{ paddingLeft: '72px', paddingBottom: '72px' }}>
      <h2>Contact</h2>
      <div style={{ paddingLeft: '20px' }}>
        <h6 style={{ fontSize: '1.2rem', fontWeight: 'normal', lineHeight: 0, margin: 0, color: darkMode ? '#fff' : '#333' }}>
          Email: {' '}
          <a href="mailto:abhignya.p@northeastern.com" style={{ color: darkMode ? '#fff' : '#333' }}>abhignya.p@northeastern.com</a>
        </h6>
        <h6 style={{ fontSize: '1.2rem', fontWeight: 'normal', lineHeight: 0, color: darkMode ? '#fff' : '#333' }}>Phone: +16298994020</h6>
        <h6 style={{ fontSize: '1.2rem', fontWeight: 'normal', lineHeight: 0, color: darkMode ? '#fff' : '#333' }}>
          LinkedIn:{' '}
          <a href="https://www.linkedin.com/in/pachava-abhignya-778436141/" target="_blank" rel="noopener noreferrer" style={{ color: darkMode ? '#fff' : '#333' }}>
            Pachava Abhignya
          </a>
        </h6>

      </div>



    </div>
  );
}

export default ContactComponent;
