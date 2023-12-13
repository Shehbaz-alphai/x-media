import { Component } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrl: './animation.component.css',
})
export class AnimationComponent {
  isRow2Visible: boolean = false;
  packages = [
    'Essential Package',
    'Growth Package',
    'Premium Package',
    'Custom Package',
  ];
  toggleRow2Visibility() {
    this.isRow2Visible = !this.isRow2Visible;
  }
  services = [
    { name: 'Concept Development', icons: [true, true, true, true] },
    { name: 'Storyboarding', icons: [true, true, true, true] },
    { name: 'Character Design', icons: [true, true, true, true] },
    { name: 'Background Design', icons: [true, true, true, true] },
    { name: 'Animation', icons: [true, true, true, true] },
    { name: 'Sound Design & Mixing', icons: [true, true, true, true] },
    { name: 'Video Editing', icons: [true, true, true, true] },
    { name: 'Delivery', icons: [true, true, true, true] },
    { name: 'Style Frames', icons: [false, true, true, true] },
    { name: 'Animatic', icons: [false, true, true, true] },
    { name: 'Motion Graphics', icons: [false, true, true, true] },
    { name: '3D Modeling', icons: [false, false, true, true] },
    { name: '3D Rendering', icons: [false, false, true, true] },
  ];

  prices = [
    { tier: 'Basic', price: '$500/month' },
    { tier: 'Standard', price: '$1000/month' },
    { tier: 'Premium', price: '$2000/month' },
    { tier: 'Custom', price: 'Varies' },
  ];


  services1 = [
    { name: 'Website Design', icons: [true, true, true, true] },
    { name: 'Website Development', icons: [true, true, true, true] },
    { name: 'Content Management System (CMS) Setup', icons: [true, true, true, true] },
    { name: 'Responsive Design', icons: [true, true, true, true] },
    { name: 'Basic SEO Optimization', icons: [true, true, true, true] },
    { name: 'Website Launch', icons: [true, true, true, true] },
    { name: 'Website Maintenance & Support', icons: [false, true, true, true] },
    { name: 'Custom Functionality Development', icons: [false, false, true, true] },
    { name: 'E-Commerce Development', icons: [false, false, true, true] },
    { name: 'Web Performance Optimization', icons: [false, false, true, true] },
    { name: 'Website Security', icons: [false, false, true, true] },
  ];
  
  prices1 = [
    { tier: 'Basic', price: '600/month' },
    { tier: 'Standard', price: '$2000/month' },
    { tier: 'Premium', price: '$3000/month' },
    { tier: 'Custom', price: 'Varies' },
  ];

}
