import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { AuthService } from './../services/auth';
import { ModalService } from './../../shared/services/modal';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {

  modal = inject(ModalService);

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  login() {

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    // نرسل فقط البيانات المطلوبة للـ API
    const body = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };

    this.authService.login(body).subscribe({

      next: (res: any) => {

        console.log('Login Success:', res);

        // احفظ الـ Token
        this.authService.saveToken(res.token);

        // اقفل الـ Modal
        this.modal.closeLogin();

      },

      error: (err) => {

        console.error('Login Error:', err);

      }

    });

  }

  close() {
    this.modal.closeLogin();
  }

}
