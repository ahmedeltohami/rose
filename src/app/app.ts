import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar/navbar";
import { HomePage } from "./home/home-page/home-page";
import { Footer } from "./home/footer/footer";
import { Login } from "./auth/login/login";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('rose');
}
