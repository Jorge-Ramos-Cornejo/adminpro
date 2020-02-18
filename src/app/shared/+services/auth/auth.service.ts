import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ResultadoBusqueda } from '../../+model/general/resultado-busqueda.model';
import * as jwt_decode from 'jwt-decode';

export interface Autenticacion {
  id: number;
  usuario: string;
  documento: string;
  token: string;
  message: any;
}

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  API_URL = `${environment.baseUrl}usuario`;

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http
      .post<Autenticacion>(`${this.API_URL}/authenticate`, {
        usuario: username,
        clave: password,
      })
      .pipe(
        map((r: any) => {
          if (r && r.token) {
              localStorage.setItem('currentUser',  JSON.stringify(r));
              console.log('entro local', r);
          }
          return r;
        })
      )
      .toPromise();
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
  
  isLoggedIn() {
    return localStorage.getItem('currentUser');
  }

  get token() {
    if (this.isLoggedIn) {
      return JSON.parse(localStorage.getItem('currentUser')).token;
    } else {
      return '';
    }
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);

    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      token = this.token;
    }
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }
    return !(date.valueOf() > new Date().valueOf());
  }


}
