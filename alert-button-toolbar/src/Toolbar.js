import React from 'react';
import AlertButton from './AlertButton';

function Toolbar() {
  return (
    <div>
      <AlertButton message="This is the first button">Button 1</AlertButton>
      <AlertButton message="This is the second button">Button 2</AlertButton>
    </div>
  );
}

export default Toolbar;