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
      titulo: 'Usuarios',
      icono: 'mdi mdi-gauge',
      url: '/usuarios',
      submenu: [
      ]
    },
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
