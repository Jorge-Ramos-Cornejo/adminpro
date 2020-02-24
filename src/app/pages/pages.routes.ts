import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardInicioComponent } from './dashboard/dashboard-inicio/dashboard-inicio.component';
import {ProfileComponent} from './profile/profile.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import {NewExpdienteComponent} from './new-expdiente/new-expdiente.component';
import { BandejaComponent } from './bandeja/bandeja.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { AuthGuard } from '../shared/+guards/auth.guard';
import { UsuarioListComponent } from './usuario/usuario-list/usuario-list.component';
import { OficinaListComponent } from './oficina/oficina-list/oficina-list.component';

const pagesRoutes: Routes = [
    {path: '',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
          {path: 'dashboard', component: DashboardInicioComponent, data: {titulo: 'Dashboard'}},
          {path: 'bandeja', component: BandejaComponent, data: {titulo: 'Bandeja'}},
          {path: 'reportes', component: ReportesComponent, data: {titulo: 'Reportes'}},
          {path: 'consultas', component: ConsultasComponent, data: {titulo: 'Consultas'}},
          {path: 'newExpediente', component: NewExpdienteComponent, data: {titulo: 'Nuevo expediente'}},
          {path: 'profile', component: ProfileComponent, data: {titulo: 'Profile'}},
          {path: 'usuarios', component: UsuarioListComponent, data: {titulo: 'Usuarios'}},
          {path: 'oficinas', component: OficinaListComponent, data: {titulo: 'Oficinas'}},
          {path: 'progress', component: ProgressComponent, data: {titulo: 'Progress'}},
          {path: 'graficas1', component: Graficas1Component, data: {titulo: 'Graficas'}},
          {path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas'}},
          {path: 'rxjs', component: RxjsComponent, data: {titulo: 'RxJs'}},
          {path: 'account-settings', component: AccoutSettingsComponent, data: {titulo: 'Ajustes del Tema'}},
          {path: '', redirectTo: '/login', pathMatch: 'full'},
      ]
   },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes );