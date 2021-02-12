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

  const template$1 = document.createElement('template');

  template$1.innerHTML = `
<style>
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
li {
  list-style: none;
  border-bottom: 1px solid #afafaf;
  margin-bottom: 5px;
}
</style>
<div class="wrapper">
  <label></label>
  <slot name="button">
    <button></button>
  </slot>
  <ul></ul>
</div>
`;

  class MultiType extends HTMLElement {
    constructor() {
      super();
      this._shadowRoot = this.attachShadow({ mode: 'open' });
      this._shadowRoot.appendChild(template$1.content.cloneNode(true));

      this.expanded = true;

      this._DOM = {
        wrapper: this._shadowRoot.querySelector('div'),
        label: this._shadowRoot.querySelector('label'),
        list: this._shadowRoot.querySelector('ul'),
        buttonSlot: this.shadowRoot.querySelector('slot[name="button"]'),
        button: this._shadowRoot.querySelector('button'),
      };

      this.defaultButtonProps = {
        "expandedText": 'Collapse',
        "collapsedText": 'Expand',
      };
    }

    get buttonProps() {
      return {
        ...this.defaultButtonProps,
        ...JSON.parse(this.getAttribute('buttonprops')),
      };
    }

    get itemList() {
      const listString = this.getAttribute('itemlist');
      if (listString) {
        return listString.replace(/["'\]\[]/g, '').split(',');
      }
      return [];
    }

    static get observedAttributes() {
      return ['title', 'itemlist', 'buttonprops'];
    }

    toggleList() {
      this.expanded = !this.expanded;
      this._DOM.list.style.display = this.expanded ? 'block' : 'none';
    }

    renderLabel() {
      this._DOM.label.innerHTML = this.title;
    }

    renderList() {
      this._DOM.list.innerHTML = this.itemList.reduce((acc, item) =>
        `${acc}<li>${item}</li>`, '');
    }

    renderButton() {
      const text = this.expanded ? this.buttonProps.expandedText : this.buttonProps.collapsedText;
      this._DOM.button.innerHTML = text;
    }

    attributeChangedCallback() {
      this.render();
    }

    connectedCallback() {
      const attachClick = () => {
        this._DOM.button.addEventListener('click', () => {
          this.toggleList();
          this.renderButton();
        });
      };

      this._DOM.buttonSlot.addEventListener('slotchange', (event) => {
        this._DOM.button = event.target.assignedElements()[0];
        this.renderButton();
        attachClick();
      });

      attachClick();
    }

    render() {
      this.renderLabel();
      this.renderList();
      this.renderButton();
    }
  }

  window.customElements.define('vanilla-ds-multitype', MultiType);

})));
