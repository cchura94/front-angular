import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-crear',
  templateUrl: './categoria-crear.component.html',
  styleUrls: ['./categoria-crear.component.css'],
})
export class CategoriaCrearComponent implements OnInit {
  categoriaForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', Validators.required),
  });

  constructor(
    private categoriaService: CategoriaService,
    private routes: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  guardar() {
    this.categoriaService
      .guardar(this.categoriaForm.value)
      .subscribe((res: any) => {
        console.log('El producto registrado');
        this.toastr.success('Correcto', 'Producto registrado');
        this.routes.navigate(['/admin/categoria']);
      });
  }
}
