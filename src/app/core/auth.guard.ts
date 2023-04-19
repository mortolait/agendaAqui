import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {

  constructor(private authService: AuthService, private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    
    if(!this.authService.hasToken()){
      console.log(this.authService.hasToken())
      this.router.navigate([''])
      return false
    }
    else{
      return true
    }


  }
}
