import React, { useState } from 'react';

const StencilDSButton = () => {
  const [label, setLabel] = useState('Ahoy!');

  return (
    <stencil-ds-button onClick={() => setLabel('You clicked me!')}>
      {label}
    </stencil-ds-button>
  );
};

export default StencilDSButton;
