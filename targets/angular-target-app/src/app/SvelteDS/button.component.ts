import { Component } from '@angular/core';

@Component({
  selector: 'svelte-button',
  templateUrl: './button.component.html',
})

export class SvelteDSButton {
  text = 'Ahoy!';

  onClick() {
    this.text = 'You clicked me!';
  }
}
