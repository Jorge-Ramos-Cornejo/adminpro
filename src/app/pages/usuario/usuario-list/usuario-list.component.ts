import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import Swal from 'sweetalert2';
import { UsuarioService } from 'src/app/shared/+services/usuario/usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent implements OnInit {
  form: FormGroup;
  @BlockUI() blockUI: NgBlockUI;
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['Area', 'Responsable', 'Activo', 'actions'];
  constructor(
    private usuarioService: UsuarioService) { }

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
      const resp = await this.usuarioService.getUsuarios();
      console.log(resp);
    } catch (err) {
      throw err;
    }

  }


}
