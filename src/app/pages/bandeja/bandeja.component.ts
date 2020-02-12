import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource,
  MatDialog } from '@angular/material';
import { BotonOpciones } from 'src/app/shared/+model/boton-opciones/boton-opciones.model';
import { Router } from '@angular/router';
import {TramiteService} from 'src/app/shared/+services/tramite/tramite.service';

@Component({
  selector: 'app-bandeja',
  templateUrl: './bandeja.component.html',
  styleUrls: ['./bandeja.component.scss']
})
export class BandejaComponent implements OnInit {  
  listData: MatTableDataSource<any> = new MatTableDataSource([]);
  ColumnsPreferencial: string[] = ['nombres'];
  
  ArrayRows = [];
  
  FabOptions: Array<BotonOpciones> = [
    {
      icon: 'sigo new-document',
      title: 'Nuevo Expediente',
      visible: true
    }, 
  ];

  constructor(
              private router: Router,
              private tramiteService: TramiteService
              ) { }

  ngOnInit() {

  }

  
  clickOpcion(id: number) {
    if (id === 0) {
      this.router.navigate(['newExpediente']);
      return;
    }

  }

  select_row(row) {
    this.ArrayRows = [];
    this.ArrayRows.push(row);
  }
}
