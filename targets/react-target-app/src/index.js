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
import {
  MultiType as VanillaDSMultiType,
  DefaultMultiType as DefaultVanillaDSMultiType
} from './VanillaDS/MultiType.jsx';
import {
  MultiType as LitElementDSMultiType,
  DefaultMultiType as DefaultLitElementDSMultiType
} from './LitElementDS/MultiType.jsx';
import './style.css';

defineCustomElements();

const App = () => (
  <div>
    <p>MultiType showcases:</p>
    <div className="multitype-wrapper">
      <div className="multitype-block">
        <p>Vanilla DS:</p>
        <DefaultVanillaDSMultiType />
        <br /><br />
        <VanillaDSMultiType />
      </div>
      <div className="multitype-block">
        <p>Lit Element DS:</p>
        <DefaultLitElementDSMultiType />
        <br /><br />
        <LitElementDSMultiType />
      </div>
    </div>
    <p>Button showcases:</p>
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
