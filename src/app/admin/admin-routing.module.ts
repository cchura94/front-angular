import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductoComponent } from './producto/producto.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { CategoriaListarComponent } from './categoria/categoria-listar/categoria-listar.component';
import { CategoriaCrearComponent } from './categoria/categoria-crear/categoria-crear.component';
import { CategoriaModificarComponent } from './categoria/categoria-modificar/categoria-modificar.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'producto',
        component: ProductoComponent,
      },
      {
        path: 'categoria',
        component: CategoriaComponent,
        children: [
          {
            path: '',
            component: CategoriaListarComponent,
          },
          {
            path: 'nuevo',
            component: CategoriaCrearComponent,
          },
          {
            path: ':id/editar',
            component: CategoriaModificarComponent,
          },
        ],
      },
      {
        path: 'proveedor',
        component: ProveedorComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
