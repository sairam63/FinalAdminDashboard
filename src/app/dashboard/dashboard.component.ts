import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  showSubOptions: { [key: string]: boolean } = {
    servicesRequests: false,
    users: false,
    reports: false
    // Add more main options here if needed
  };

  toggleSubOptions(option: string) {
    this.showSubOptions[option] = !this.showSubOptions[option];
  }

}
