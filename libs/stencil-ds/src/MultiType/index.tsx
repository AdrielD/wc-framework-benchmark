import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'stencil-ds-multitype',
  styleUrl: 'style.css',
  shadow: true,
})

export class MultiType {
  @Prop() title: string;
  @Prop() itemlist: Array<string>;
  @Prop() buttonprops: Object = { expandedText: 'Collapse', collapsedText: 'Expand' };

  @State() expanded: boolean = true;

  render () {
    return (
      <div class="wrapper">
        <label>${this.title}</label>
      </div>
    );
  }
}

//   <slot name="button" @slotchange=${this.handleButtonSlotChange}>
      //     <button @click=${this.handleClick}>${this.buttonText}</button>
      //   </slot>
      //   <ul class=${this.expanded ? 'expanded' : 'collapsed'}>
      //     ${this.itemlist.map(item => html`<li>${item}</li>`)}
      //   </ul>
