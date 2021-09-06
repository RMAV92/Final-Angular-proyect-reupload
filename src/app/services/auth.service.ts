import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDto } from '../models/dto/login.dto';
import { RegisterDto } from '../models/dto/register.dto';
import { AuthResponse } from '../models/interfaces/auth.interface';

const apiUrl = 'https://www.minitwitter.com:3001/apiv1';

const defaultHeaders = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'  
  })
}
  
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuth: boolean = false;
  public currentUser: any ;

  constructor(private http: HttpClient) {
    if(localStorage.getItem('token')!== null){
      this.isAuth= true;
    }
  }
  login(loginDto: LoginDto):Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${apiUrl}/auth/login`, loginDto, defaultHeaders);
  }
  register(form:RegisterDto):Observable<any>{
    
    return this.http.post<any>(`${apiUrl}/auth/signup`, form, defaultHeaders);
  }
  
}
