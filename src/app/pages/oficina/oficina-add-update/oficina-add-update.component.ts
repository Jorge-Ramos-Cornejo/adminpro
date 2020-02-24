import { Component, OnInit } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { OficinaService } from 'src/app/shared/+services/oficina/oficina.service';
import {Oficina} from 'src/app/shared/+model/oficina/oficina.model';

@Component({
  selector: 'app-oficina-add-update',
  templateUrl: './oficina-add-update.component.html',
  styleUrls: ['./oficina-add-update.component.scss']
})
export class OficinaAddUpdateComponent implements OnInit {
  form: FormGroup;
  @BlockUI() blockUI: NgBlockUI;

  constructor(
    private oficinaService: OficinaService,
  ) { }

  ngOnInit() {
    this.buildForm();
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

  async agregar() {
    try {
      this.blockUI.start('Cargando');
      const oficinaI: Oficina =  {
        CodOficina: '001',
        Iniciales: 'Andre',
        Nombre: 'oficina registro',
        Ubicacion: 'I',
        Estado: 'A',
        FechaRegistro: new Date(),
        ResponsableRegistro: 'Jorge',
        Observaciones: 'Agregado por el buen George',
        Jefe: '093'
      }
      // const resp = await this.oficinaService.insertarOficina(oficinaI);
      // const resp = await this.oficinaService.obtenerOficina('001');
      const resp = await this.oficinaService.actualizarOficina(oficinaI);
      console.log(resp);
    } catch (err) {
      console.error(err);
    } finally {
      this.blockUI.stop();
    }
  }

}
