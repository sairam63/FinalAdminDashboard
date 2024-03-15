// frontend/src/app/dashboard/dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { Usersservice } from '../service/users.service';

@Component({
  selector: 'app-bookingmanagment',
  templateUrl: './bookingmanagment.component.html',
  styleUrls: ['./bookingmanagment.component.css'],
})
export class BookingmanagmentComponent implements OnInit {
  searchText: string = '';
  users: any[] = [];

  constructor(private usersservice: Usersservice) { }

  ngOnInit(): void {
    this.usersservice.getusers().subscribe(
      (data: any) => {
        // Check if data is not empty and is an array
        if (Array.isArray(data) && data.length > 0) {
          // Filter out items with missing or undefined Date property
          const filteredData = data.filter(item => item.Date);

          // Sort the users array based on the 'Date' property
          this.users = filteredData.sort((a, b) => a.Date.localeCompare(b.Date));

        }
      },
      error => {
        console.error('Error fetching users:', error);
      }
    );
  }

  onSearch() {
    console.log('Search term:', this.searchText);
  }
}


// frontend/src/app/dashboard/dashboard.component.ts
// import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Usersservice } from '../service/users.service';

// @Component({
//   selector: 'app-bookingmanagment',
//   templateUrl: './bookingmanagment.component.html',
//   styleUrls: ['./bookingmanagment.component.css'],
// })
// export class BookingmanagmentComponent implements OnInit {
//   searchText: string = '';
//   users: any; // Renamed to 'users' for clarity

//   constructor(private usersservice: Usersservice) { }

//   ngOnInit(): void {
//     this.usersservice.getusers().subscribe(data => {
//       this.users = data;
//     });
//   }


//   onSearch() {
//     console.log('Search term:', this.searchText);
//   }
// }
