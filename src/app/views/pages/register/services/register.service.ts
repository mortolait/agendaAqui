import { UserClient } from './../model/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.url_base;


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }


  setUserClient(userClient: UserClient): Observable<UserClient> {
    return this.httpClient.post<UserClient>(`${API}/clientSaas`, userClient)
  }
}
