const template = document.createElement('template');

template.innerHTML = `
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
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.expanded = true;

    this._DOM = {
      wrapper: this._shadowRoot.querySelector('div'),
      label: this._shadowRoot.querySelector('label'),
      list: this._shadowRoot.querySelector('ul'),
      buttonSlot: this.shadowRoot.querySelector('slot[name="button"]'),
      button: this._shadowRoot.querySelector('button'),
    }

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
      })
    }

    this._DOM.buttonSlot.addEventListener('slotchange', (event) => {
      this._DOM.button = event.target.assignedElements()[0];
      this.renderButton();
      attachClick();
    })

    attachClick();
  }

  render() {
    this.renderLabel();
    this.renderList();
    this.renderButton();
  }
}

window.customElements.define('vanilla-ds-multitype', MultiType);
