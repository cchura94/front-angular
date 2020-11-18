import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente.component';
import { InicioComponent } from './inicio/inicio.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ClienteComponent,
    InicioComponent,
    PublicacionComponent,
    ContactoComponent,
    LoginComponent,
  ],
  imports: [CommonModule, ClienteRoutingModule, ReactiveFormsModule],
})
export class ClienteModule {}
