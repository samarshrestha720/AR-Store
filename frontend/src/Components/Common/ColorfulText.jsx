import React from 'react';

const ColorfulText = ({ children }) => {
  return (
    <span style={{ color: 'orangered', marginLeft: '2px', marginRight: '2px' }}>
      {children}
    </span>
  );
};

export default ColorfulText;
