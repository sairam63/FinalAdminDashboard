// frontend/src/app/data/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {environment} from '../../environment/environment'


@Injectable({
  providedIn: 'root',
})
export class Usersservice {
  private apiUrl= 'http://localhost:2000/getBookedServicesData'
  constructor(private http: HttpClient) { }
  getusers() {
    console.log('Sending request to fetch users...');
    return this.http.get(`https://admin-backend-3.onrender.com/getBookedServicesData`)
      .pipe(
        tap(data => console.log('Received data from the API:', data)),
        catchError(error => {
          console.error('Error fetching users:', error);
          throw error; // Re-throw the error to propagate it further
        })
      );
  }

  deleteService(_id: string): Observable<any> {
    const url = `${this.apiUrl}/${_id}`;
    return this.http.delete<any>(url).pipe(
      catchError((error) => {
        console.error('Error deleting user:', error);
        return throwError(error);
      })
    );
  }

  updateService(editingService: any): Observable<any> {
    const url = `${this.apiUrl}/${editingService._id}`;
    return this.http.put<any>(url, editingService).pipe(
      tap((updatedService) => console.log('Updated service:', updatedService)),
      catchError((error) => {
        console.error('Error updating service:', error);
        throw error;
      })
    );
  }
}













// private backendUrl = 'http://localhost:5000/api/data';

// constructor(private http: HttpClient) { }

// getData(): Observable<any> {
//   return this.http.get<any>('/api/data');
// }
// }




// // data.service.ts
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { catchError, tap } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {
//   private apiUrl = 'http://localhost:5000/api/data';

//   constructor(private http: HttpClient) { }

//   getData(): Observable<any[]> {
//     console.log('Fetching data from:', `${this.apiUrl}/api/data`);
//     return this.http.get<any[]>(`${this.apiUrl}/api/data`)
//       .pipe(
//         tap(data => console.log('Data received:', data)),
//         catchError(error => {
//           console.error('Error fetching data:', error);
//           throw error;
//         })
//       );
//   }
// }
