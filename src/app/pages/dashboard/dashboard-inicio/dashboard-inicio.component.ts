import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource,
  MatDialog } from '@angular/material';
import { BotonOpciones } from 'src/app/shared/+model/boton-opciones/boton-opciones.model';

@Component({
  selector: 'app-dashboard-inicio',
  templateUrl: './dashboard-inicio.component.html',
  styleUrls: ['./dashboard-inicio.component.css']
})
export class DashboardInicioComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

  clickOpcion(id: number) {
    if (id === 0) {
     
      return;
    }

  }

  select_row(row) {
    this.ArrayRows = [];
    this.ArrayRows.push(row);
  }

}
