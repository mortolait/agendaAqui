import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Professional } from '../model/professional.model';
import { ProfessionalService } from '../service/professional-service.service';
import { SharedService } from '../../../core/services/shared.service';


@Component({
  selector: 'app-new-professional',
  templateUrl: './new-professional.component.html',
  styleUrls: ['./new-professional.component.scss'],
})
export class NewProfessionalComponent {

  constructor(
    private formBuilder: FormBuilder,
    private serviceProfessional: ProfessionalService,
    public sharedService: SharedService,
    public router: Router
  ) { }

  customValidate: any = false;

  ProfessionalForm!: FormGroup;

  ngOnInit() {

    this.getStates();

    this.ProfessionalForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      cpf: ['', [Validators.required, Validators.minLength(11)]],
      cep: ['', [Validators.required]],
      city: ['', [Validators.required]],
      uf: ['', [Validators.required]],
      address: ['', [Validators.required]],
      district: ['', [Validators.required]],
      number: ['', [Validators.required]],
      telFone: [''],
      cellFone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', [Validators.required]],
      function: ['', [Validators.required]],
      complement: [''],
      obs: [''],
    });
  }


  register() {
    this.customValidate = true;
    let newProfessional = this.ProfessionalForm.getRawValue() as Professional;
    if (this.ProfessionalForm.valid) {
      console.log({ newProfessional });
      this.serviceProfessional.create(newProfessional).subscribe({
        next: (response) => {
          this.router.navigate([`../professional/${response}`]);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }else{
      console.log('invalido');
      console.log(this.ProfessionalForm);
    }

  }

  getStates() {
    this.sharedService.states = [];
    this.sharedService.getStates().subscribe({
      next: (response) => {
        this.sharedService.states = response;
        console.log(this.sharedService.states);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  selectedState($event: any) {
    this.sharedService.cities = [];
    let sigla = $event.target.value;
    this.sharedService.getCities(sigla).subscribe({
      next: (response) => {
        this.sharedService.cities = response[0].cidades;
        console.log(this.sharedService.cities);

      },
      error: (err) => {
        console.log({ err: err });
      },
    });
  }
}
