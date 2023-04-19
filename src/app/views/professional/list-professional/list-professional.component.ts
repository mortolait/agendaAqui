import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Professional, Professionals } from '../model/professional.model';
import { ProfessionalService } from '../service/professional-service.service';
@Component({
  selector: 'app-list-professional',
  templateUrl: './list-professional.component.html',
  styleUrls: ['./list-professional.component.scss'],
})
export class ListProfessionalComponent {
  constructor(public service: ProfessionalService, private router: Router) {}

  ngOnInit() {
    this.getProfessional();
  }

  professionals!: Professionals;

  columns = [
    {
      key: 'name',
      label: 'Nome',
      _style: { width: '40%' },
    },
    { key: 'email', label: 'Email', filter: true, sorter: true },
    { key: 'cellFone', label: 'Contato', _style: { width: '20%' } },
    {
      key: 'show',
      label: '',
      _style: { width: '5%' },
    },
  ];

  details_visible = Object.create({});

  toggleDetailst(item: any) {
    this.details_visible[item] = !this.details_visible[item];
  }

  getProfessional() {
    this.service.get().subscribe({
      next: (response) => {
        this.service.professionals = response;
        this.service.professionals.forEach((item)=>{
          item.id = item._id
        })
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  perfilProfessional(professional: Professional) {
    this.router.navigate(['/professional/' + professional.id]);
  }

  deleteItem(id: String){
    this.service.delete(id).subscribe({
      next: response => {
        console.log(response)
        this.service.professionals = this.service.professionals.filter(item => item.id != id)
      },
      error: err => {
        console.log(err)
      }
    })
  }
  checkSelected($event: Event) {}

  register(){
    
  }

}
