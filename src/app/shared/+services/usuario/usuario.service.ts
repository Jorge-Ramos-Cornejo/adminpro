import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ResultadoBusqueda } from '../../+model/general/resultado-busqueda.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  API_URL = `${environment.baseUrl}usuario`;

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http
      .get<ResultadoBusqueda>(`${this.API_URL}`)
      .toPromise();
  }


}
