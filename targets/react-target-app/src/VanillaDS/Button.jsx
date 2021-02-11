import React, { useState } from 'react';

const VanillaDSButton = () => {
  const [label, setLabel] = useState('Ahoy!');

  return (
    <vanilla-ds-button onClick={() => setLabel('You clicked me!')}>
      {label}
    </vanilla-ds-button>
  );
};

export default VanillaDSButton;
