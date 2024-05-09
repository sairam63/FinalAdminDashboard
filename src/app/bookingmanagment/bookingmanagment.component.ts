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
        // Sort by date in descending order
        this.sortedData = data.sort((a: any, b: any) => {
          const dateA = new Date(a.date).getTime();
          const dateB = new Date(b.date).getTime();
          return dateB - dateA;
        });
      },
      error => {
        console.error('Error fetching users:', error);
      }
    );
  }



  // ngOnInit(): void {
  //   this.usersservice.getusers().subscribe(
  //     (data: any) => {
  //       // Sort by date in descending order
  //       data.sort((a: any, b: any) => {
  //         const dateA = new Date(a.date).getTime();
  //         const dateB = new Date(b.date).getTime();
  //         return dateB - dateA;
  //       });
  //
  //       // Format dates before displaying
  //       data.forEach((item: any) => {
  //         const formattedDate = new Date(item.date).toLocaleString('en-IN', {  year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
  //         item.date = formattedDate;
  //       });
  //
  //       // Assign the sorted and formatted data to the 'sortedData' property
  //       this.sortedData = data;
  //
  //       // Log the sorted data
  //       console.log('Sorted data in reverse order:', data);
  //     },
  //     error => {
  //       console.error('Error fetching users:', error);
  //     }
  //   );
  // }


  onSearch() {
    console.log('Search term:', this.searchText);
  }
}


