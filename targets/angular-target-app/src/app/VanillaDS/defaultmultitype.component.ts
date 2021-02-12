import { Component } from '@angular/core';

@Component({
  selector: 'vanilla-defaultmultitype',
  templateUrl: './defaultmultitype.component.html',
})

export class VanillaDSDefaultMultiType {
  title = "Multitype component (default button)";
  itemList = ['red', 'blue', 'green', 'yellow'];
  buttonProps = JSON.stringify({ collapsedText: "expandir", expandedText: "recolher" });
}
