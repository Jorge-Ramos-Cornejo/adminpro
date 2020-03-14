import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';



@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss']
})
export class ConsultasComponent implements OnInit {
  TiposConsultaReal: Array<any> = [    
    { value: 1, viewValue: 'ESTADO TRAMITE', disabled: false },
    { value: 2, viewValue: 'EXPEDIENTE', disabled: false },
    { value: 3, viewValue: 'OBLIGADO', disabled: false }
  ];
  form: FormGroup;

  ColumnsExpediente: string[] = ['tramite', 'glosa', 'estado', 'opciones'];
  listDataConsulta: MatTableDataSource<any> = new MatTableDataSource([]);
  listDataMovimientos: MatTableDataSource<any> = new MatTableDataSource([]);
  ColumnsMovimientos: string[] = ['oficinaO', 'usuarioO', 'OficinaD', 'usuarioD', 'estado'];
  ColumnsConsulta: string[] = ['tramite', 'glosa', 'codObligado',  'estado'];

  expandedElement: PeriodicElement | null;
  ArrayRows = [];

  constructor() { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = new FormGroup({
      buscar : new FormControl(''),
      buscarConsulta: new FormControl(''),
      tipoConsulta: new FormControl(1),
      estado: new FormControl('')
    });
  }

  getCssClassBy_Criticidad(estado: string): string {
    const estadoTramite = estado.toUpperCase();
    if(estado === 'TRAMITE') {
        return 'default';
    }
    if(estado === 'PROCESO') {
      return 'success';
    }
    if(estado === 'DERIVADO') {
      return 'info';
    }
    if(estado === 'FINALIZADO') {
      return 'danger';
    }
  }


  loadMovimientosConsulta(element) {

  }

  select_row(row) {
    this.ArrayRows = [];
    this.ArrayRows.push(row);
  }

}


export interface PeriodicElement {
  tramite: string;
  glosa: string;
 }