import { Component } from '@angular/core';
import { SettingsService } from './services/services.index';
import {IconosPersonalizadosComponent} from './shared/+components/iconos-personalizados/iconos-personalizados.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [IconosPersonalizadosComponent ],
})
export class AppComponent {
  title = 'adminpro';
  constructor(public _ajustes: SettingsService,
              private iconosPersonalizados: IconosPersonalizadosComponent){

      this.iconosPersonalizados.loadIconos();
  }
}
