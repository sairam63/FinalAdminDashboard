import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {environment} from "../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService  {
  getUsers() {
    throw new Error('Method not implemented.');
  }
  getUserByEmail(email: string | null | undefined) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
  getlogin(){
    return this.http.get(`${environment.apiUrl}/api/login`);
  }
}
