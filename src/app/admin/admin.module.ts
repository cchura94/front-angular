import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProductoComponent } from './producto/producto.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from './material/material.module';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { CategoriaListarComponent } from './categoria/categoria-listar/categoria-listar.component';
import { CategoriaCrearComponent } from './categoria/categoria-crear/categoria-crear.component';
import { CategoriaModificarComponent } from './categoria/categoria-modificar/categoria-modificar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    CategoriaComponent,
    ProductoComponent,
    ProveedorComponent,
    NavegacionComponent,
    CategoriaListarComponent,
    CategoriaCrearComponent,
    CategoriaModificarComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
