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
  editingService: any= null;
  updateMessage: string = '';

  private services: any;
  private service: any;


  constructor(private usersservice: Usersservice) { }


  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.usersservice.getusers().subscribe(
      (data: any) => {
        this.users = data;
        this.sortedData = this.sortByDate(data);
        console.log('Users loaded:', this.users);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  sortByDate(data: any[]): any[] {
    return data.sort((a: any, b: any) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });
  }


  // ngOnInit(): void {
  //   this.usersservice.getusers().subscribe(
  //     (data: any) => {
  //       // Sort by date in descending order
  //       this.sortedData = data.sort((a: any, b: any) => {
  //         const dateA = new Date(a.date).getTime();
  //         const dateB = new Date(b.date).getTime();
  //         return dateB - dateA;
  //       });
  //     },
  //     error => {
  //       console.error('Error fetching users:', error);
  //     }
  //   );
  // }





  onSearch() {
    console.log('Search term:', this.searchText);
  }

  editService(user: any):void {
    this.editingService = {...user};
    console.log('Editing service:', this.editingService);
  }



  deleteService(user: any):void {
    const index = this.services.findIndex((s: { id: any; }) => s.id === this.service.id);
    if (index !== -1) {
      this.services.splice(index, 1);
      this.updateMessage = "Service deleted successfully";
    }
  }

  updateService(): void {
    if (this.editingService) {
      this.usersservice.updateService(this.editingService).subscribe(
        (updatedService) => {
          const index = this.users.findIndex((u) => u._id === updatedService._id);
          if (index !== -1) {
            this.users[index] = updatedService;
          } else {
            // If the service is new, add it to the users array
            this.users.push(updatedService);
          }
          this.sortedData = this.sortByDate(this.users);
          console.log('Service updated, updated users:', this.users);
          this.closeForm();
          this.updateMessage = 'User updated successfully';
        },
        (error) => {
          console.error('Error updating user:', error);
        }
      );
    }
  }


  closeForm() {
    this.editingService = null;
    this.updateMessage = '';
    console.log('Form closed');
  }


}


