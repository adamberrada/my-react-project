import React from 'react';

function Header({ color }) {
  const headerStyle = {
    color: color,
    padding: '10px',
    textAlign: 'center',
  };

  return (
    <header style={headerStyle}>
      <h1>Random Quote Generator</h1>
    </header>
  );
}

export default Header;
