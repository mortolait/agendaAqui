import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../model/client.model';

import { ClientsService } from '../services/clients.service';


import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss'],
})
export class ListClientsComponent {
  visible:boolean =  false
  itemSelectd!:Client
  title!: string;
  items!: any;
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

  constructor(public serviceClients: ClientsService, private router: Router) {
    this.titleSubscribe();
  }

  ngOnInit() {
    this.listClients();
    this.titleSubscribe();
    this.items = [
      { label: 'Home', url: '/', attributes: { title: 'Home' } },
      { label: 'Library', url: '/' },
      { label: 'Data', url: '/dashboard/' },
      { label: 'CoreUI', url: '/' }
    ];
  }

  titleSubscribe() {
    this.router.events.pipe(
      filter(event => event instanceof ActivationEnd && !event.snapshot.firstChild),
      map(value => {
        const activatedRoute = <ActivatedRoute><unknown>value;
        return activatedRoute.snapshot?.data?.['title'] ?? null;
      })
    ).subscribe((title: string | null) => {
      this.title = title ?? 'Title';
    });

    console.log(this.title);
  }

  listClients() {
    this.serviceClients.get().subscribe({
      next: (response) => {
        this.serviceClients.clients = response;
        this.serviceClients.clients.forEach((item)=>{
          item.id = item._id
        })
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  checkSelected($event: any) {
    console.log($event);
  }


  getBadge(status: string) {
    switch (status) {
      case 'Adimplente':
        return 'success';
      case 'Inadimplente':
        return 'warning';
      default:
        return 'primary';
    }
  }
  getItem(item: any) {
    return Object.keys(item);
  }

  details_visible = Object.create({});

  toggleDetailst(item: any) {
    this.details_visible[item] = !this.details_visible[item];
  }

  deleteItem(id: String,_id:number){
    this.serviceClients.delete(id).subscribe({
      next: response => {
       this.serviceClients.clients.filter(item => item.id != id)
      },
      error: err =>{
        console.log(err)
      }
    })
  }

  register(){
    this.router.navigate(['/clients/new-client'])
  }
  handleLiveDemoChange(item:Client){
    this.itemSelectd = item
    this.serviceClients.visibleModalConfirm = !this.serviceClients.visibleModalConfirm
  }

  perfilClient(client: Client){
    this.router.navigate(['/clients/'+ client.id])
  }
}
