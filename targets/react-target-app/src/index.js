import React from 'react';
import ReactDOM from 'react-dom';
import VanillaDSButton from './VanillaDS/Button.jsx';

const App = () => (
  <div>
    Vanilla DS: <VanillaDSButton />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
