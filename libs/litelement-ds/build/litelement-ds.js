(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('lit-element')) :
  typeof define === 'function' && define.amd ? define(['lit-element'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.litElement));
}(this, (function (litElement) { 'use strict';

  class Button extends litElement.LitElement {
    static get styles() {
      return litElement.css`
      button {
        border: 2px solid #289c47;
        border-radius: 15px;
        background-color: #50d975;
        color: #fff;
        font-size: 1em;
        font-weight: 700;
        padding: 5px 10px;
        cursor: pointer;
      }
      button:hover {
        border: 2px solid #50d975;
        background-color: #289c47;
      }
      button:active {
        border: 2px solid #50d975;
        background-color: #2a7d41;
      }
      button:focus {
        border: 2px solid #50d975;
        outline: none;
      }
    `;
    }

    render() {
      return litElement.html`
      <button>
        <slot></slot>
      </button>
    `;
    }
  }

  customElements.define('litelement-ds-button', Button);

})));
