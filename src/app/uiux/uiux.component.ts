import { Component } from '@angular/core';

@Component({
  selector: 'app-uiux',
  templateUrl: './uiux.component.html',
  styleUrl: './uiux.component.css'
})
export class UiuxComponent {
  isRow2Visible: boolean = false;
  packages = ['Essential Package', 'Growth Package', 'Premium Package', 'Custom Package'];
  toggleRow2Visibility() {
    this.isRow2Visible = !this.isRow2Visible;
  }
}
