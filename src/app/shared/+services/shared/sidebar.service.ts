import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
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
    // {
    //   titulo: 'Principal',
    //   icono: 'mdi mdi-gauge',
    //   submenu: [
    //     // {titulo: 'Dashboard', url: '/dashboard'},
    //     {titulo: 'ProgressBar', url: '/progress'},
    //     {titulo: 'Promesas', url: '/promesas'},
    //     {titulo: 'Rxjs', url: '/rxjs'},
    //     {titulo: 'Gráficas', url: '/graficas1'}
    //   ]
    // }
  ];
  constructor() { }
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
