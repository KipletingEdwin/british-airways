import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}

  passengers = {
    adults: 1,
    youngAdults: 0,
    children: 0,
    infants: 0
  };

  MAX_PASSENGERS = 9;

  increment(type: keyof typeof this.passengers) {
    this.passengers[type]++;
  }

  decrement(type: keyof typeof this.passengers) {
    if(this.passengers[type] > 0) {
      this.passengers[type]--;
    }
  }

  //Total seat validation check
  isTotalLimitReached(): boolean {
    const totalSeats = this.passengers.adults + this.passengers.youngAdults + this.passengers.children;
    return totalSeats >= this.MAX_PASSENGERS;
  }

  //Standard booking logic: cannot have more laps infants than available adults
  isInfantLimitReached(): boolean {
    return this.passengers.infants >= this.passengers.adults
  }

  getPassengerSummary(): string {
    const total = Object.values(this.passengers).reduce((sum, current) => sum + current, 0);

    if (total === 1 && this.passengers.adults === 1) {
      return '1 adult';
    }

    const summaryParts: string[] = [];
    if (this.passengers.adults > 0) summaryParts.push(`${this.passengers.adults} Adult${this.passengers.adults > 1 ? 's' : ''}`);
    if (this.passengers.youngAdults > 0) summaryParts.push(`${this.passengers.youngAdults} Young Adult${this.passengers.adults > 1 ? 's' : ''}`);
    if (this.passengers.children > 0) summaryParts.push(`${this.passengers.children} Child${this.passengers.children > 1 ? 'ren' : ''}`);
    if (this.passengers.infants > 0) summaryParts.push(`${this.passengers.infants} Infant${this.passengers.infants > 1 ? 's' : ''}`);

    return summaryParts.join(', ');
  }
}
