import React from 'react';
import ReactDOM from 'react-dom';
import 'vanilla-ds/build/vanilla-ds';
import 'litelement-ds/build/litelement-ds';
import 'svelte-ds/build/bundle';
// import 'vue-ds/dist/vue-ds';
import { defineCustomElements } from  'stencil-ds';
import VanillaDSButton from './VanillaDS/Button.jsx';
import LitElementDSButton from './LitElementDS/Button.jsx';
import StencilDSButton from './StencilDS/Button.jsx';
import SvelteDSButton from './SvelteDS/Button.jsx';
// import VueDSButton from './VueDS/Button.jsx';

defineCustomElements();

const App = () => (
  <div>
    Vanilla DS: <VanillaDSButton />
    <br /><br />
    LitElement DS: <LitElementDSButton />
    <br /><br />
    Stencil DS: <StencilDSButton />
    <br /><br />
    Svelte DS: <SvelteDSButton />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
