import { Component } from '@angular/core';

@Component({
  selector: 'app-sec',
  templateUrl: './sec.component.html',
  styleUrl: './sec.component.css'
})
export class SecComponent {
  isRow2Visible: boolean = false;
  packages = ['Essential Package', 'Growth Package', 'Premium Package', 'Custom Package'];
  toggleRow2Visibility() {
    this.isRow2Visible = !this.isRow2Visible;
  }
}
