/* eslint-disable */
import { createApp } from 'vue';
import App from './App.vue';
import { defineCustomElements } from  'stencil-ds';
import 'vanilla-ds/build/vanilla-ds';

defineCustomElements();

createApp(App).mount('#app')
