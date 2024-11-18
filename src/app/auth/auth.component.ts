import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  activeTab: string = 'login'; // Tab inicial

  selectTab(tab: string): void {
    this.activeTab = tab; // Cambia la pestaña activa
  }
}
