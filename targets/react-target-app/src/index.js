import React from 'react';
import ReactDOM from 'react-dom';
import 'vanilla-ds/build/vanilla-ds';
import { defineCustomElements } from  'stencil-ds';
import VanillaDSButton from './VanillaDS/Button.jsx';
import StencilDSButton from './StencilDS/Button.jsx';

defineCustomElements();

const App = () => (
  <div>
    Vanilla DS: <VanillaDSButton />
    <br /><br />
    Stencil DS: <StencilDSButton />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
