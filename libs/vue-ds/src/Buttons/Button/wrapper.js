import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import Button from './index.vue';

const CustomElement = wrap(Vue, Button)

window.customElements.define('vue-ds-button', CustomElement);
