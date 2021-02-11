import React, { useState } from 'react';

const SvelteDSButton = () => {
  const [label, setLabel] = useState('Ahoy!');

  return (
    <svelte-ds-button onClick={() => setLabel('You clicked me!')}>
      {label}
    </svelte-ds-button>
  );
};

export default SvelteDSButton;
