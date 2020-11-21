import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-modificar',
  templateUrl: './categoria-modificar.component.html',
  styleUrls: ['./categoria-modificar.component.css'],
})
export class CategoriaModificarComponent implements OnInit {
  categoriaForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', Validators.required),
  });

  id: number;
  categoria: any;

  constructor(
    private route: ActivatedRoute,
    private categoriService: CategoriaService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      this.id = res.id;

      this.categoriService.mostrar(this.id).subscribe((dato: any) => {
        this.categoria = dato.datos;
        console.log(dato);
        this.cargarFormulario();
      });
    });
  }

  cargarFormulario() {
    this.categoriaForm = this.fb.group({
      nombre: [this.categoria.nombre],
      descripcion: [this.categoria.descripcion],
    });
  }

  modificar() {
    this.categoriService
      .modificar(this.id, this.categoriaForm.value)
      .subscribe((res: any) => {
        this.router.navigate(['/admin/categoria']);
      });
  }
}
