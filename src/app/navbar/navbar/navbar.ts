import { Component, inject } from '@angular/core';
import { ModalService } from '../../shared/services/modal';
import { AuthService } from '../../auth/services/auth';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  auth = inject(AuthService);
  modal = inject(ModalService);

  openLogin() {
    this.modal.openLogin();
  }

  logout() {
    this.auth.logout();
  }

}
