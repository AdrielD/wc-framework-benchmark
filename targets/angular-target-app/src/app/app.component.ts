import { Component } from '@angular/core';
import 'vanilla-ds/build/vanilla-ds';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  text = 'Ahoy!';

  onClick() {
    this.text = 'You clicked me!';
  }
}
