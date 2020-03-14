import { Component, OnInit, Inject } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { OficinaService } from 'src/app/shared/+services/oficina/oficina.service';
import {Oficina} from 'src/app/shared/+model/oficina/oficina.model';
import {OficinaList} from 'src/app/shared/+model/oficina/oficinaList.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import _ from 'lodash';
import { SWMessageService } from 'src/app/shared/+services/general/sw-message.service';

@Component({
  selector: 'app-oficina-add-update',
  templateUrl: './oficina-add-update.component.html',
  styleUrls: ['./oficina-add-update.component.scss']
})
export class OficinaAddUpdateComponent implements OnInit {
  form: FormGroup;
  @BlockUI() blockUI: NgBlockUI;

  title: '';
  codOficina;
  updateButton = false;

  constructor(
    private oficinaService: OficinaService,
    private swMessage: SWMessageService,
    @Inject(MAT_DIALOG_DATA) private data: any,
  ) { }

  async ngOnInit() {
    try {
    this.blockUI.start('Cargando');
    this.title = this.data ? this.data.title : '';
    this.codOficina = this.data ? this.data.codOficina : '';
    this.buildForm();
    if (this.codOficina !== '0') {
      await this.getOficina();
      this.updateButton = true;
    }
    } catch (err) {
      console.error(err);
    } finally {
      // this.blockUI.stop();
    }
  }

  buildForm() {
    this.form = new FormGroup({
      codigo: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      iniciales: new FormControl(''),
      ubcacion: new FormControl(''),
      fechaRegistro: new FormControl(''),
      responsableRegistro: new FormControl(''),
      observaciones: new FormControl(''),
      estado: new FormControl(''),
      jefe: new FormControl(''),
     });
  }

  get codigoInput() { return this.form.get('codigo'); }
  get nombreInput() { return this.form.get('nombre'); }
  get inicialesInput() { return this.form.get('iniciales'); }
  get ubcacionInput() { return this.form.get('ubcacion'); }
  get observacionesInput() { return this.form.get('observaciones'); }
  get estadoInput() { return this.form.get('estado'); }

  async getOficina() {
    try {
      const resp = await this.oficinaService.obtenerOficina(this.codOficina);
      
      const oficina: OficinaList = resp;
      console.log(oficina);
      this.form.patchValue({
        codigo: oficina.codOficina,
        nombre: (oficina.nombre).trim(),
        iniciales: (oficina.iniciales).trim(),
        ubcacion: (oficina.ubicacion).trim(),
        fechaRegistro: (oficina.fechaRegistro),
        responsableRegistro: (oficina.responsableRegistro).trim(),
        observaciones: (oficina.observaciones).trim(),
        estado: (oficina.estado).trim(),
        jefe: (oficina.jefe.trim()),
      });
    } catch (err) {
      throw err;
    }
  }


  async agregar() {
    try {
      this.blockUI.start('Cargando');
      if (this.form.valid) {
        const usuario = this.obtenerUsuario();
        const oficinaI: Oficina =  {
          CodOficina: this.form.get('codigo').value,
          Iniciales: this.form.get('nombre').value,
          Nombre: this.form.get('iniciales').value,
          Ubicacion: this.form.get('ubcacion').value,
          Estado: 'A',
          FechaRegistro: new Date(),
          ResponsableRegistro: usuario,
          Observaciones: this.form.get('observaciones').value,
          Jefe: '093'
        };
        if (this.updateButton) {
          const resp = await this.oficinaService.actualizarOficina(oficinaI);
          
        } else {
          const resp = await this.oficinaService.insertarOficina(oficinaI);
        }
      } else {
        const controls = this.form.controls;
        Object.keys(controls).forEach(controlName =>
          controls[controlName].markAsTouched()
        );
        
        this.swMessage.showWarningAlert('Complete los campos');
        console.log('mensaje');
      }
    } catch (err) {
      console.error(err);
    } finally {
      this.blockUI.stop();
    }
  }

  resetForm() {
    this.form.get('nombre').reset('');
    this.form.get('iniciales').reset('');
    this.form.get('ubcacion').reset('');
    this.form.get('observaciones').reset('');
    this.form.get('jefe').reset('');
    this.form.markAsPristine();
    this.form.markAsUntouched();
    this.form.updateValueAndValidity();
  }

  obtenerUsuario() {
    const objeto = JSON.parse(localStorage.getItem('currentUser'));
    return objeto.usuario;
  }

}

