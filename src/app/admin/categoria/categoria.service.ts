import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  url_base = environment.servidor;

  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    let usuario = JSON.parse(atob(localStorage.getItem('access_token')));
    let token = usuario.access_token;

    this.headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': 'Bearer ' + token,
    });
  }

  listar() {
    return this.http.get(this.url_base+"/categoria", { headers: this.headers });
  }

  guardar(datos){
    return this.http.post(this.url_base+"/categoria", datos, { headers: this.headers });
  }

  modificar(id, datos){
    return this.http.put(this.url_base+"/categoria/"+id, datos, { headers: this.headers });
  }

  eliminar(id){
    return this.http.delete(this.url_base+"/categoria/"+id, { headers: this.headers });
  }

}
