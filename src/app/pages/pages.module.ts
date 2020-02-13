import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';

import { DashboardInicioComponent } from './dashboard/dashboard-inicio/dashboard-inicio.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';
import { NewExpdienteComponent } from './new-expdiente/new-expdiente.component';
import { BandejaComponent } from './bandeja/bandeja.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ConsultasComponent } from './consultas/consultas.component';


@NgModule({
  declarations: [
      PagesComponent,
      DashboardInicioComponent,
      Graficas1Component,
      ProgressComponent,
      IncrementadorComponent,
      GraficoDonaComponent,
      AccoutSettingsComponent,
      PromesasComponent,
      RxjsComponent,
      ProfileComponent,
      NewExpdienteComponent,
      BandejaComponent,
      ReportesComponent,
      ConsultasComponent,
  ],
  exports: [
    DashboardInicioComponent,
    Graficas1Component,
    ProgressComponent
  ],
  imports: [
      SharedModule.forRoot(),
      PAGES_ROUTES,
      FormsModule,
      ChartsModule,
      ReactiveFormsModule          
  ]
})

export class PagesModule { }