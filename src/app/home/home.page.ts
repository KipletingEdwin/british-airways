import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}

  isPopoverOpen = false;
  private hoverTimeout: any;

  openPopover() {
    if (this.hoverTimeout) {
      clearTimeout(this.hoverTimeout);
    }
    this.isPopoverOpen = true;
  }

  closePopover() {
    this.hoverTimeout = setTimeout(() => {
      this.isPopoverOpen = false;
    }, 150);
  }



}
