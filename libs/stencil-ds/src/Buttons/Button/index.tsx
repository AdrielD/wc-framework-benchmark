import { Component, h } from '@stencil/core';

@Component({
  tag: 'stencil-ds-button',
  styleUrl: 'style.css',
  shadow: true,
})

export class Button {

  render () {
    return <button><slot /></button>;
  }
}
