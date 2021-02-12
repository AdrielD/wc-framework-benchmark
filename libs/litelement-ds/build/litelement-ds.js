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

  class MultiType extends litElement.LitElement {
    static get styles() {
      return litElement.css`
      .wrapper {
        padding: 5px;
        border: 1px solid #000;
        border-radius: 5px;
        box-shadow: 1px 1px 10px #000;
        display: inline-block;
      }
      ul {
        margin: 0;
        padding: 10px;
      }
      .expanded { display: block; }
      .collapsed { display: none; }
      li {
        list-style: none;
        border-bottom: 1px solid #afafaf;
        margin-bottom: 5px;
      }
    `;
    }

    constructor() {
      super();
      this.expanded = true;
      this.slottedButton = null;
      this.defaultButtonProps = { expandedText: 'Collapse', collapsedText: 'Expand' };
      this.buttonprops = this.defaultButtonProps;
      this.itemlist = [];
      this.handleClick = this.handleClick.bind(this);
    }

    static get properties() {
      return {
        title: { type: String },
        expanded: { attribute: false },
        itemlist: { type: Array },
        buttonprops: {
          type: Object,
          converter: (value) => ({
            ...this.defaultButtonProps,
            ...JSON.parse(value),
          })
        },
      };
    }

    get buttonText() {
      return this.expanded ? this.buttonprops.expandedText : this.buttonprops.collapsedText;
    }

    handleClick() {
      this.expanded = !this.expanded;
    }

    handleButtonSlotChange(event) {
      const element = event.target.assignedElements()[0];
      element.addEventListener('click', this.handleClick);
      element.innerHTML = this.buttonText;
      this.slottedButton = element;
    }

    updated() {
      if (this.slottedButton) {
        this.slottedButton.innerHTML = this.buttonText;
      }
    }

    render() {
      return litElement.html`
      <div class="wrapper">
        <label>${this.title}</label>
        <slot name="button" @slotchange=${this.handleButtonSlotChange}>
          <button @click=${this.handleClick}>${this.buttonText}</button>
        </slot>
        <ul class=${this.expanded ? 'expanded' : 'collapsed'}>
          ${this.itemlist.map(item => litElement.html`<li>${item}</li>`)}
        </ul>
      </div>
    `;
    }
  }

  customElements.define('litelement-ds-multitype', MultiType);

})));
