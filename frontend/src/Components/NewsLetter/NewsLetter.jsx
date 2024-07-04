import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter-wrapper">
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe To Our NewsLetter And Stay Updated</p>
        <div className="newsletter-input">
          <input type="email" placeholder="Your Email Id" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
