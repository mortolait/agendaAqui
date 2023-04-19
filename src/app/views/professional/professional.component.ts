import { Component } from '@angular/core';
import { ProfessionalService } from './service/professional-service.service'
@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss']
})
export class ProfessionalComponent {

  constructor(public service: ProfessionalService){}

  getProfessional(){
    this.service.get().subscribe({
      next: response => {
        console.log(response)
      },
      error: err =>{
        console.log(err)
      }
    })
  }
}
