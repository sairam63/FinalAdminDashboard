import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Usersservice} from "../../service/users.service";
import * as moment from 'moment';
import 'moment-timezone';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  searchText: string='';
  sortedData: any[]=[];
  users: any[] = [];
  filter: string = 'all';


  constructor(private usersservice: Usersservice, private route: ActivatedRoute) { }



  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.filter = params['filter'] || 'all';
      this.loadUsers();
    });
  }

  loadUsers(): void {
    this.usersservice.getusers().subscribe(
      (data: any) => {
        this.users = data;
        this.sortedData = this.applyFilter(data);
        console.log('Users loaded:', this.users);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }


  applyFilter(data: any[]): any[] {
    const today = moment.tz('Asia/Kolkata').startOf('day');

    if (this.filter === '7days') {
      const last7Days = today.clone().subtract(7, 'days');
      return data.filter(user => {
        const userDate = moment.tz(user.date, 'Asia/Kolkata');
        return userDate.isBetween(last7Days, today, null, '[]'); // inclusive of start and end date
      });
    } else if (this.filter === '30days') {
      const last30Days = today.clone().subtract(30, 'days');
      return data.filter(user => {
        const userDate = moment.tz(user.date, 'Asia/Kolkata');
        return userDate.isBetween(last30Days, today, null, '[]'); // inclusive of start and end date
      });
    } else {
      return data;
    }
  }

  // applyFilter(): void {
  //   const now = moment().tz('Asia/Kolkata'); // Get the current date and time in the desired timezone
  //   let filteredData = this.users;
  //
  //   if (this.filter === '7days') {
  //     // Calculate the start of the date range (7 days ago)
  //     const startOfSevenDaysAgo = now.clone().subtract(6, 'days').startOf('day'); // Start of 7 days ago
  //
  //     // Filter data for the last 7 days
  //     filteredData = this.users.filter(user => {
  //       const userDate = moment.tz(user.date, 'YYYY/MM/DD HH:mm:ss', 'Asia/Kolkata'); // Parse user date
  //       return userDate.isSameOrAfter(startOfSevenDaysAgo) && userDate.isSameOrBefore(now);
  //     });
  //   } else if (this.filter === '30days') {
  //     // Calculate the start of the date range (30 days ago)
  //     const startOfThirtyDaysAgo = now.clone().subtract(29, 'days').startOf('day'); // Start of 30 days ago
  //
  //     // Filter data for the last 30 days
  //     filteredData = this.users.filter(user => {
  //       const userDate = moment.tz(user.date, 'YYYY/MM/DD HH:mm:ss', 'Asia/Kolkata'); // Parse user date
  //       return userDate.isSameOrAfter(startOfThirtyDaysAgo) && userDate.isSameOrBefore(now);
  //     });
  //   }
  //
  //   this.sortedData = this.sortByDate(filteredData);
  // }



  sortByDate(data: any[]): any[] {
    return data.sort((a: any, b: any) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });
  }
}
