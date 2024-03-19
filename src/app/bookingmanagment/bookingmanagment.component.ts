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
        console.log('Received data from the API:', data); // Log the received data

        // Sort the data by date and time in descending order
        this.users = data.sort((a: any, b: any) => {
          // console.log('a.date:', a.date);
          // console.log('b.date:', b.date);
          // Ensure both a.Date and b.Date are defined
          if (!a.date || !b.date) {
            return 0;
          }
          // Extract timestamps from date strings and compare
          const timestampA = new Date(a.date).getTime();
          const timestampB = new Date(b.date).getTime();
          // Compare timestamps
          return timestampB - timestampA;
        });
      },
      error => {
        console.error('Error fetching users:', error);
      }
    );
  }



  // parseCustomDate(dateString: string): Date {
  //   // Check if dateString is undefined or empty
  //   if (!dateString || dateString.trim() === '') {
  //     console.error('Date string is undefined or empty');
  //     return new Date(); // Provide a default date if dateString is undefined or empty
  //   }
  //
  //   // Parsing logic for valid date strings
  //   const parts = dateString.split(', ');
  //   if (parts.length !== 2) {
  //     console.error('Invalid date format:', dateString);
  //     return new Date(0); // Return a default date if the format is invalid
  //   }
  //
  //   const [datePart, timePart] = parts;
  //   const [date, month, year] = datePart.split('/');
  //   const [time, ampm] = timePart.split(' ');
  //   const [hours, minutes, seconds] = time.split(':');
  //   const hours24 = (ampm === 'PM' ? parseInt(hours) + 12 : parseInt(hours));
  //
  //   return new Date(`${year}-${month}-${date}T${hours24}:${minutes}:${seconds}`);
  // }



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
