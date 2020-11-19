import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CategoriaService } from '../categoria.service';

export interface CategoriaElement {
  id: string;
  nombre: number;
  descripcion: number;
}

@Component({
  selector: 'app-categoria-listar',
  templateUrl: './categoria-listar.component.html',
  styleUrls: ['./categoria-listar.component.css'],
})
export class CategoriaListarComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'acciones'];
  dataSource: CategoriaElement[];

  cargando: boolean = true;

  constructor(
    private categoriaService: CategoriaService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.categoriaService.listar().subscribe((res: any) => {
      console.log(res.datos);
      this.dataSource = res.datos;
      this.cargando = false;
    });
  }

  eliminar(id) {
    this.categoriaService.eliminar(id).subscribe((res: any) => {
      this.toastr.success('Correcto', 'Producto Eliminado');
    });
  }
}
