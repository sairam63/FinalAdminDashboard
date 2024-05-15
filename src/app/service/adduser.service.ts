import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdduserService {
  private apiUrl ='http://localhost:2000/api/users';
    constructor(private http: HttpClient) { }

  addUser(userData:any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData);
  }
}
