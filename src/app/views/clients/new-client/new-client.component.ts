import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from '../model/client.model';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss'],
})
export class NewClientComponent {
  newClientForm!: FormGroup;

  cpfValidator:boolean = false

  states!: any;
  cities!: any;

  typePerson = [
    {
      type: 'Física',
      value: 'F',
    },
    {
      type: 'Jurídica',
      value: 'J',
    },
  ];
  constructor(
    private clientService: ClientsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  customValidate: any = false;

  ngOnInit() {
    this.newClientForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      typePerson: ['', [Validators.required]],
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
      profession: [''],
      complement: [''],
      obs: [''],
    });

    this.getStates();
  }
  register() {
    this.customValidate = true;
    let newClient = this.newClientForm.getRawValue() as Client;
    newClient.status = 'Adimplente';
    if (this.newClientForm.valid) {
      this.clientService.create(newClient).subscribe({
        next: (response) => {
          console.log({response});
          this.router.navigate([`../clients/${response}`]);
        },
        error: (err) => {
          alert('err');
          console.log(err);
        },
      });
    } else {
      console.log(this.newClientForm)
      this.cpfValidator = false
    }
  }

  getStates() {
    this.clientService.getStates().subscribe({
      next: (response) => {
        console.log(response);
        this.states = response;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  selectedState($event: any) {
    this.cities = [];
    let sigla = $event.target.value;
    this.clientService.getCities(sigla).subscribe({
      next: (response) => {
        this.cities = response[0];
      },
      error: (err) => {
        console.log({ err: err });
      },
    });
  }
}
