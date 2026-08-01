import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({

  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'token';

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}


 login(data: any) {
  return this.http.post(`${this.apiUrl}/auth/signin`, data);
}

register(data: any) {
  return this.http.post(`${this.apiUrl}/auth/signup`, data);
}
  logout() {
  localStorage.removeItem(this.tokenKey);
}

saveToken(token: string) {
  localStorage.setItem(this.tokenKey, token);
}

isLoggedIn(): boolean {
  return !!localStorage.getItem(this.tokenKey);
}
}
