import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResultadoBusqueda } from '../../+model/general/resultado-busqueda.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TramiteService {
  API_URL = `${environment.baseUrl}Tramite`;
  constructor(private http: HttpClient) { }

  getTiposDocumentosExpedientes() {
    // return this.http
    // .get<ResultadoBusqueda>(`${this.API_URL}/ObtenerOrigenTramite`)
    // .toPromise();

    const hardData = [
      {value: 1, label: 'Solicitud'},
      {value: 2, label: 'Carta'},
      {value: 3, label: 'Oficio'},
    ];
    const resp: ResultadoBusqueda = {
      success : true,
      message : hardData
    };
    return of(resp).toPromise();
  }
}
