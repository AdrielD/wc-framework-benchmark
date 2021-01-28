import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'vanilla-ds/build/vanilla-ds';

const App = () => {
  const [label, setLabel] = useState('Ahoy!');

  return (
    <div>
      <vanilla-ds-button onClick={() => setLabel('You clicked me!')}>
        {label}
      </vanilla-ds-button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
