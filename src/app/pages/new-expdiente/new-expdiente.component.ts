import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {BlockUI, NgBlockUI} from 'ng-block-ui';
import {TramiteService} from 'src/app/shared/+services/tramite/tramite.service';

@Component({
  selector: 'app-new-expdiente',
  templateUrl: './new-expdiente.component.html',
  styleUrls: ['./new-expdiente.component.scss']
})
export class NewExpdienteComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  fotoUrl: string;
  logo = `assets/layout/images/user-silhouette.png`;
  frmExpediente: FormGroup;
  TipoPersona = [
    {value: 1, label: 'Natural'},
    {value: 2, label: 'Juridica'}
  ];

  expTiposDocumento: Array<any> = [];
  constructor(private tramiteService: TramiteService) { }

  async ngOnInit() {
    try {
      this.blockUI.start('Cargando');
      await this.buildForm();
      await this.loadData();
    } catch (error) {
      console.error(error);
    } finally {
      this.blockUI.stop();
    }
  
  }

  async buildForm() {
    this.frmExpediente = new FormGroup({
      tipoPersona: new FormControl(1, [Validators.required]),
      tipoDocumento: new FormControl(1, [Validators.required]),
      documento: new FormControl('', [Validators.required]),
      nombres: new FormControl(''),
      direccion: new FormControl(''),
      telefono: new FormControl(''),
      correo: new FormControl(''),
      exp_TipoDocumento: new FormControl(''),
      folios: new FormControl(''),
      asunto: new FormControl('')
    });
  }

  get getTipoPersonaInput() {return this.frmExpediente.get('tipoPersona'); }
  get getTipoDocumentoInput() {return this.frmExpediente.get('tipoDocumento'); }
  get getExpTipoDocumentoInput() {return this.frmExpediente.get('exp_TipoDocumento'); }
  get getDocumentoInput() {return this.frmExpediente.get('documento'); }
  
  async loadData() {
    try {
      const respuesta = await this.tramiteService.getTiposDocumentosExpedientes();
      if (respuesta.success) {
        this.expTiposDocumento = respuesta.message;
      }
    } catch (error) {
      throw error;
    }
   
  }

  async onEnterPressed(e) {    
    if (
      [46, 8, 9, 27].indexOf(e.keyCode) !== -1 ||
      // Allow: Ctrl+A
      (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+C
      (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+V
      (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+X
      (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
      // Allow: home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39)
    ) {
      // let it happen, don't do anything
      return;
    }

    if (
      (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
      (e.keyCode < 96 || e.keyCode > 105)
    ) {
      e.preventDefault();
   }
}


}
