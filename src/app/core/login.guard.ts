import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanLoad {
  constructor(public authService: AuthService, public router: Router) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.hasToken()) {
      console.log("ok")
      this.router.navigate(['dashboard']);
      return true;
    } else {
      console.log(" nao ok")
      return true;
    }
  }
}
