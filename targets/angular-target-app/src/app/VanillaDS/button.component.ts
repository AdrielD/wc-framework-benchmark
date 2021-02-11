import { Component } from '@angular/core';

@Component({
  selector: 'vanilla-button',
  templateUrl: './button.component.html',
})

export class VanillaDSButton {
  text = 'Ahoy!';

  onClick() {
    this.text = 'You clicked me!';
  }
}
