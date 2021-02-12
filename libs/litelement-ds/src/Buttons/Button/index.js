import { LitElement, html, css } from 'lit-element';

class Button extends LitElement {
  static get styles() {
    return css`
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
    return html`
      <button>
        <slot></slot>
      </button>
    `;
  }
}

customElements.define('litelement-ds-button', Button);
