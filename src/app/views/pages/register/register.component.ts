import { RegisterService } from './services/register.service';
import { UserClient } from './model/user.model';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  newUserClientForm!: FormGroup

  constructor(
    private userClientService: RegisterService,
    private router: Router
  ) {
    this.newUserClientForm = new FormGroup({
      username: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  register(){
    console.log("ok")
    let newUserClient = this.newUserClientForm.getRawValue() as UserClient

    if(this.newUserClientForm.valid){
      this.userClientService.setUserClient(newUserClient).subscribe({
        next: (response)=>{
          this.router.navigate(['home/login'])
        },
        error: (err)=>{
          console.log(err)
        }
      })
    }
  }

}
