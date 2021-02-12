import React, { useState } from 'react';

const VueDSButton = () => {
  const [label, setLabel] = useState('Ahoy!');

  return (
    <vue-ds-button onClick={() => setLabel('You clicked me!')}>
      {label}
    </vue-ds-button>
  );
};

export default VueDSButton;
