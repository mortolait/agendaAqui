import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-generic-alrt',
  templateUrl: './generic-alrt.component.html',
  styleUrls: ['./generic-alrt.component.css']
})
export class GenericAlertComponent implements OnInit {

  @Input() message: string = '';
  @Input() type: string = '';
  constructor() { }

  ngOnInit() {
  }

}
