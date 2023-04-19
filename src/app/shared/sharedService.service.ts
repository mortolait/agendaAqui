import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private menuOpen = new BehaviorSubject<boolean>(false);

  constructor() { }

  getMenuOpen() {
    return this.menuOpen.asObservable();
  }

  toggleMenu() {
    this.menuOpen.next(!this.menuOpen.value);
    console.log({menu:this.menuOpen.value});
  }

  showAlert(message: string, type: string) {
    
  }
}
