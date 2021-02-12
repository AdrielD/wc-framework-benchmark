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
  <div className="wrapper">
    <p className="w100">MultiType showcases:</p>
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
    <p className="w100">Button showcases:</p>
    <div className="w100">Vanilla DS: <VanillaDSButton /></div>
    <div className="w100">LitElement DS: <LitElementDSButton /></div>
    <div className="w100">Stencil DS: <StencilDSButton /></div>
    <div className="w100">Svelte DS: <SvelteDSButton /></div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
