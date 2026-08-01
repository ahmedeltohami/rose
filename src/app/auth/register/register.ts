import { AuthService } from './../services/auth';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { ModalService } from '../../shared/services/modal';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
fb = inject(FormBuilder);
authService = inject(AuthService);
  registerForm = this.fb.group({
  firstName: ['', Validators.required],
  lastName: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  password: ['', Validators.required],
  rePassword: ['', Validators.required],
  phone: ['', Validators.required],
  gender: ['male', Validators.required]
});
modal = inject(ModalService);

register() {

  if (this.registerForm.invalid) {
    this.registerForm.markAllAsTouched();
    return;
  }

  this.authService.register(this.registerForm.value).subscribe({

    next: (res: any) => {

     console.log(res);

  alert('Register Successfully');

  this.registerForm.reset();


    },

    error: (err) => {

      console.log(err);

    }

  });

}
}
