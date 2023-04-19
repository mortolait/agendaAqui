import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router){}

  user!:String;
  password!: String;

  login(){
    this.authService.login(this.user,this.password).subscribe({
      next: response =>{
        console.log(response)
        this.authService.saveToken(response.token)
        this.router.navigate(['dashboard'])
      },
      error: err =>{
        console.log(err)
      }
    })
  }
}
