import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private loginService: LoginService,
    private routes: Router,
    private toastr: ToastrService
  ) {}

  ingresar() {
    this.loginService.iniciar_sesion(this.loginForm.value).subscribe(
      (datos) => {
        localStorage.setItem('access_token', btoa(JSON.stringify(datos)));
        console.log(datos);
        this.toastr.success('Bienvenido', 'Inicio de sesion correcta');
        this.routes.navigate(['/admin']);
      },
      (error) => {
        console.log('Ocurrió un error al autenticar');
        this.toastr.error('Error', 'Ocurrió un error al ingresar');
      }
    );
  }

  ngOnInit(): void {}
}
