import { Component, OnInit } from '@angular/core';
//import { Publicacion } from './publicacion';
import { PublicacionService } from './publicacion.service';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css'],
})
export class PublicacionComponent implements OnInit {
  publicaciones: any[] = [];

  constructor(private postService: PublicacionService) {}

  ngOnInit(): void {
    this.postService.listar().subscribe((res: any) => {
      this.publicaciones = res;
      console.log(this.publicaciones);
    });
  }
}
