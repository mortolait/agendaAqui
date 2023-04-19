import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Professional } from '../model/professional.model';
import { ProfessionalService } from '../service/professional-service.service';
import { SharedService } from '../../../core/services/shared.service';

@Component({
  selector: 'app-perfil-professional',
  templateUrl: './perfil-professional.component.html',
  styleUrls: ['./perfil-professional.component.scss'],
})
export class PerfilProfessionalComponent {
  idProfessional!: String;
  professional$!: Professional;
  states!: any;
  cities!: any;

  PerfilProfessionalForm!: FormGroup;

  customValidate = false;
  constructor(
    private formBuilder: FormBuilder,
    private activetedRouter: ActivatedRoute,
    public serviceProfessional: ProfessionalService,
    public sharedService: SharedService
  ) {}

  ngOnInit() {


    this.PerfilProfessionalForm = this.formBuilder.group({
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
      email: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      function: [''],
      complement: [''],
      obs: [''],
    });

    this.idProfessional = this.activetedRouter.snapshot.params?.['id'];

    this.perfilProfessional()
    this.getStates();
  }

  perfilProfessional() {
    this.serviceProfessional.getById(this.idProfessional).subscribe({
      next: (response) => {
        console.log(response);
        this.professional$ = response
        this.professional$.birthDate = moment(this.professional$.birthDate).format('YYYY-MM-DD')
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getStates() {
    this.sharedService.states = [];
    this.sharedService.getStates().subscribe({
      next: (response) => {
        this.sharedService.states = response;
        this.selectedState(this.professional$.uf)
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  selectedState($event: any) {
    this.sharedService.cities = [];
    let sigla = $event?.target?.value?$event?.target?.value:this.professional$.uf;
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

  update(){
    this.customValidate = true;

    if (this.PerfilProfessionalForm.valid) {
      this.serviceProfessional.update(this.professional$,this.idProfessional).subscribe({
        next: (response) => {
          console.log({response});
        },
        error: (err) => {
          console.log({err});
        },
      });
    }else{
      console.log('Formulario invalido');
      console.log(this.PerfilProfessionalForm);
    }
  }

}
