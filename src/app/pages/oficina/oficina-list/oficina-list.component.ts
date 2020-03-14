import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import Swal from 'sweetalert2';
import { OficinaService } from 'src/app/shared/+services/oficina/oficina.service';
import {Oficina} from 'src/app/shared/+model/oficina/oficina.model';
import { OficinaAddUpdateComponent } from '../oficina-add-update/oficina-add-update.component';
import {
  MatDialog
} from '@angular/material';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-oficina-list',
  templateUrl: './oficina-list.component.html',
  styleUrls: ['./oficina-list.component.scss']
})
export class OficinaListComponent implements OnInit {
  private subs = new SubSink();
  form: FormGroup;
  @BlockUI() blockUI: NgBlockUI;
  listData: MatTableDataSource<Oficina>;
  displayedColumns: string[] = ['codigo', 'nombre', 'iniciales', 'ubicacion', 'fecha', 'actions'];
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(
    private oficinaService: OficinaService,
    private dialog: MatDialog) { }

  async ngOnInit() {
    try {
      this.blockUI.start('Cargando');
      this.buildForm();
      await this.loadData();
    } catch (err) {
      console.error(err);
    } finally {
      this.blockUI.stop();
    }
  }

  buildForm() {
    this.form = new FormGroup({
      searchKey: new FormControl(null),
      UnidadOperativa: new FormControl(null, Validators.required),
      Responsable: new FormControl(null, Validators.required),
    });

  }

  async loadData() {
    try {
      const resp: Oficina[] = await this.oficinaService.getOficinas();
      if (resp.length > 0) {
        this.listData = new MatTableDataSource(resp);
        this.listData.paginator = this.paginator;
      }
    } catch (err) {
      throw err;
    }

  }

  async open_modal_add(estado, valor) {
    const ref = this.dialog.open(OficinaAddUpdateComponent, {
      data: {
        title: estado ? 'Registrar Oficina' : 'Editar Oficina',
        codOficina: valor
      },
      width: '35%',
      disableClose: true
    });

    ref.keydownEvents().subscribe(e => {
      if (e.keyCode === 27) {
        e.preventDefault();
        ref.close();
      }
    });

    this.subs.add(
      ref.afterClosed().subscribe(resp => {
        if (resp) {

        }
      })
    );
  }
  
  searchTable() {
    const searchKey = this.form.controls['searchKey'].value;
    this.listData.filter = searchKey.trim().toLowerCase();
  }

}
