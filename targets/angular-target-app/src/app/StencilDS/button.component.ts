import { Component } from '@angular/core';

@Component({
  selector: 'stencil-button',
  templateUrl: './button.component.html',
})

export class StencilDSButton {
  text = 'Ahoy!';

  onClick() {
    this.text = 'You clicked me!';
  }
}
