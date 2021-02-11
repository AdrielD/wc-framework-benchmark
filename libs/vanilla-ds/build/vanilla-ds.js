(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  const template = document.createElement('template');

  template.innerHTML = `
<style>
  button {
    border: 2px solid #8609b8;
    border-radius: 15px;
    background-color: #af0af0;
    color: #fff;
    font-size: 1em;
    font-weight: 700;
    padding: 5px 10px;
    cursor: pointer;
  }
  button:hover {
    border: 2px solid #af0af0;
    background-color: #8609b8;
  }
  button:active {
    border: 2px solid #af0af0;
    background-color: #5f0782;
  }
  button:focus {
    border: 2px solid #af0af0;
    outline: none;
  }
</style>
<button class="button">
  <slot></slot>
</button>
`;

  class Button extends HTMLElement {
    constructor() {
      super();
      this._shadowRoot = this.attachShadow({ mode: 'open' });
      this._shadowRoot.appendChild(template.content.cloneNode(true));

      this.$button = this._shadowRoot.querySelector('button');
    }

    // get onClick() {
    //   return this.getAttribute('onClick');
    // }

    // set onClick(value) {
    //   this.setAttribute('onClick', value);
    // }

    // static get observedAttributes() {
    //   return ['onClick'];
    // }

    // attributeChangedCallback() {
    //   this.render();
    // }

    render() {
      // this.$button.onclick = this.onClick;
    }
  }

  window.customElements.define('vanilla-ds-button', Button);

})));
