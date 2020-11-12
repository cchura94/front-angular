import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: ClienteComponent,
    children: [
      {
        path: '',
        component: InicioComponent,
      },
      {
        path: 'contacto',
        component: ContactoComponent,
      },
      {
        path: 'publicaciones',
        component: PublicacionComponent,
      },
      {
        path: 'ingresar',
        component: LoginComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule {}
