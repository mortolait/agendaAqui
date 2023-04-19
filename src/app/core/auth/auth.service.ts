import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private httpClient: HttpClient) {}

  login(user: String, password: String):Observable<any>{
    return this.httpClient.post<any>(`${environment.url_base}/users/login`, {
      user: user,
      password: password,
    });
  }

  saveToken(token:string){
    localStorage.setItem('token',token)
  }

  getToken(){
    return localStorage.getItem('token') ?? ''
  }

  hasToken(){
    return !!this.getToken()
  }
}
