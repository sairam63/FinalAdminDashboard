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
  sortedData: any[]=[];

  constructor(private usersservice: Usersservice) { }

  ngOnInit(): void {
    this.usersservice.getusers().subscribe(
      (data: any) => {
        console.log('Received data from the API:', data); // Log the received data

        // Log dates before sorting
        console.log('Dates before sorting:', data.map((item: any) => {
          // Check if item.date is a Date object before calling toLocaleDateString()
          return (item.date instanceof Date) ? item.date.toLocaleDateString() : item.date;
        }));
  
        // Reverse the order of the elements in the 'data' array
        data.reverse();
  
        
  
        // Sort by date in descending order
        data.sort((a: any, b: any) => {
          const dateA = new Date(a.date).getTime(); // Convert to timestamp
          const dateB = new Date(b.date).getTime(); // Convert to timestamp
          return dateB - dateA; // Compare timestamps
        });

        // Assign the sorted data to the 'sortedData' property
        this.sortedData = data;
  
        // Log dates after sorting
        console.log('Dates after sorting:', data.map((item: any) => {
          // Check if item.date is a Date object before calling toLocaleDateString()
          return (item.date instanceof Date) ? item.date.toLocaleDateString() : item.date;
        }));
  
        console.log('Sorted data in reverse order:', data); // Log the sorted data in reverse order
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
