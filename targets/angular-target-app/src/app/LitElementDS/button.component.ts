import { Component } from '@angular/core';

@Component({
  selector: 'litelement-button',
  templateUrl: './button.component.html',
})

export class LitElementDSButton {
  text = 'Ahoy!';

  onClick() {
    this.text = 'You clicked me!';
  }
}
