import { Component, OnInit } from '@angular/core';
declare function init_plugins();
@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss']
})
export class ConsultasComponent implements OnInit {
  menu: Menu[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      url: '/dashboard',
      submenu: [
      ]
    },
    {
      titulo: 'Bandeja',
      icono: 'mdi mdi-gauge',
      url: '/bandeja',
      submenu: [
      ]
    },
    {
      titulo: 'Consultas',
      icono: 'mdi mdi-gauge',
      url: '/consultas',
      submenu: [
      ]
    },
    {
      titulo: 'Reportes',
      icono: 'mdi mdi-gauge',
      url: '/reportes',
      submenu: [
      ]
    },
       {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        // {titulo: 'Dashboard', url: '/dashboard'},
        {titulo: 'ProgressBar', url: '/progress'},
        {titulo: 'Promesas', url: '/promesas'},
        {titulo: 'Rxjs', url: '/rxjs'},
        {titulo: 'Gráficas', url: '/graficas1'}
      ]
    }
  ]
  constructor() {init_plugins(); }

  ngOnInit() {
    
  }

}

export interface Menu {
  titulo: string;
  icono: string;
  url?: string;
  submenu: SubMenu[]
}
export interface SubMenu {
  titulo: string;
  url: string;
}