import { Component, Input } from '@angular/core';
import { ClientsRoutingModule } from '../clients-routing.module';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent {

  @Input()
  item: any

  constructor(public serviceClients: ClientsService){}

  deleteItem(){
    console.log(this.item._id)
    this.serviceClients.delete(this.item.id).subscribe({
      next: response => {
        this.serviceClients.clients = this.serviceClients.clients.filter(client => client.id !== this.item.id);
        this.handleLiveDemoChange()
      },
      error: err =>{
        console.log(err)
      }
    })
  }

  handleLiveDemoChange(){
    this.serviceClients.visibleModalConfirm= !this.serviceClients.visibleModalConfirm
  }


}
