import React from 'react';

function AlertButton({ message, children }) {
  const handleClick = () => {
    alert(message);
  };

  return (
    <button onClick={handleClick}>{children}</button>
  );
}

export default AlertButton;