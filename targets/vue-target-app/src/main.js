/* eslint-disable */
import { createApp } from 'vue';
import App from './App.vue';
import { defineCustomElements } from  'stencil-ds';
import 'vanilla-ds/build/vanilla-ds';
import 'litelement-ds/build/litelement-ds';
import 'svelte-ds/build/bundle';

defineCustomElements();

createApp(App).mount('#app')
