import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { DatePipe } from '@angular/common';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import Swal from 'sweetalert2';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss'],
  providers: [DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'es' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class ReportesComponent implements OnInit {
  form: FormGroup;
  @BlockUI() blockUI: NgBlockUI;
  filterFechaIni: Date;
  filterFechaFin: Date;
  maxDateIni: Date = new Date();
  minDateFin: Date = new Date();
  maxDateFin: Date = new Date();
  filtroFechaInicio: string;
  filtroFechaFin: string;

  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
    try {
      this.blockUI.start('Cargando');
      this.buildForm();
    } catch (err) {
      console.error(err);
    } finally {
      this.blockUI.stop();
    }
  }

  buildForm() {
    this.form = new FormGroup({
      filterFechaIni: new FormControl(null, Validators.required),
      filterFechaFin: new FormControl(null, Validators.required),
      Responsable: new FormControl(null, Validators.required),
    });

  }

  loadFindingsFechaIni() {
    if (this.filterFechaIni === undefined ) {
      this.filterFechaIni = null;
    } else {
      if (this.filterFechaIni > this.filterFechaFin) {
        this.filterFechaFin = null;
        this.minDateFin = this.filterFechaIni;
      } else {
        this.filterFechaIni = this.filterFechaIni;
        this.minDateFin = this.filterFechaIni;
      }
    }
  }

  loadFindingsFechaFin() {
    if (this.filterFechaIni === undefined ) {
      this.filterFechaIni = null;
    } else {
      if (this.filterFechaIni > this.filterFechaFin) {
        this.filterFechaIni = null;
        this.maxDateIni = this.filterFechaFin;
      }
    }
  }

  searchListFindings(){
    this.filtroFechaInicio = this.filterFechaIni === undefined ? null : (this.datePipe.transform(this.filterFechaIni, 'yyyy-MM-dd')) ;
    this.filtroFechaFin = this.filterFechaFin === undefined ? null : (this.datePipe.transform(this.filterFechaFin, 'yyyy-MM-dd'));
    // this.findingService.listFindings(this.filtroFechaInicio, this.filtroFechaFin).subscribe(
    //   (data:any) => {
    //     console.log(data);
    //     this.array_rpt=[];
    //     this.array = data;
    //     this.listDataReportRequest = new MatTableDataSource(this.array);
    //     this.listDataReportRequest.sort = this.MatSort;
    //     this.listDataReportRequest.paginator = this.paginator;
    //     this.searchBan = false;
    //     this.array.forEach(el => {
    //     this.array_rpt.push(
    //       {
    //         AreaResponsableDes: el.AreaResponsableDes,
    //         UnidadOperativa_Area: el.UnidadOperativa_Area,
    //         FechaRegistro: this.datePipe.transform(el.FechaRegistro, 'dd/MM/yyyy'),
    //         Latitud: el.Latitud,
    //         Longitud: el.Longitud,
    //         Detalle: el.Detalle,
    //         AccionCorrectiva: el.AccionCorrectiva,
    //         Criticidad: this.getEstadoString_Criticidad(el.Criticidad),
    //         Estado: this.getEstadoString_URGENTE(el.Estado)
    //       }
    //     );
    //   });
    //   }, (errorServicio) => {
    //     console.log(errorServicio);
    //   }
    // );
  }

}
