import React, { useState } from 'react';

const LitElementDSButton = () => {
  const [label, setLabel] = useState('Ahoy!');

  return (
    <litelement-ds-button onClick={() => setLabel('You clicked me!')}>
      {label}
    </litelement-ds-button>
  );
};

export default LitElementDSButton;
