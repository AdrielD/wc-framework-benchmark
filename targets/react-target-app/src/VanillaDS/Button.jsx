import React, { useState } from 'react';
import 'vanilla-ds/build/vanilla-ds';

const VanillaDSButton = () => {
  const [label, setLabel] = useState('Ahoy!');

  return (
    <vanilla-ds-button onClick={() => setLabel('You clicked me!')}>
      {label}
    </vanilla-ds-button>
  );
};

export default VanillaDSButton;
