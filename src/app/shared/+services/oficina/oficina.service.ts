import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ResultadoBusqueda } from '../../+model/general/resultado-busqueda.model';
import {Oficina} from 'src/app/shared/+model/oficina/oficina.model';
import { OficinaList } from '../../+model/oficina/oficinaList.model';

@Injectable({
  providedIn: 'root'
})
export class OficinaService {
  API_URL = `${environment.baseUrl}Oficina`;

  constructor(private http: HttpClient) { }

  getOficinas() {
    return this.http
      .get<Oficina[]>(`${this.API_URL}`)
      .toPromise();
  }

  insertarOficina(oficina: Oficina) {
    return this.http
      .post<ResultadoBusqueda>(`${this.API_URL}/Insertar`, oficina)
      .toPromise();
  }

  obtenerOficina(codigo) {
    return this.http
    .get<OficinaList>(`${this.API_URL}/ById?codOficina=${codigo}`)
      .toPromise();
  }

  actualizarOficina(oficina: Oficina) {
    return this.http
      .post<any>(
        `${this.API_URL}/Actualizar`,
        oficina
      )
      .toPromise();
  }
}
