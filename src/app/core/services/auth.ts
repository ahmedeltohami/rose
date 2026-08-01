import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  private http = inject(HttpClient);

  login(data: any) {

    return this.http.post(
      `${environment.apiUrl}/auth/signin`,
      data
    );

  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

}
