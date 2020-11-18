import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private rutas: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    try {
      let usuario = JSON.parse(atob(localStorage.getItem('access_token')));
      let token = usuario.access_token;
      console.log(token);

      if (!token) {
        this.rutas.navigate(['/ingresar']);
        //return false;
      }
      return true;
    } catch (error) {
      this.rutas.navigate(['/ingresar']);
    }
  }
}
