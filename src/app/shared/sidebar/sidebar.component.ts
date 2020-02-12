import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/shared/+services/services.index';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

 i = 0;
  constructor(public _sidebar: SidebarService,
              private router: Router) { }

  ngOnInit() {
    
  }

  menu(i){
    const menu = 'menu' + i;
    // this.verificar(menu);
    return menu;
  }

 async verificar(menu) {
    document.getElementById(menu).setAttribute('ng-reflect-router-link-active', '/dashboard');
    document.getElementById(menu).setAttribute('routerLinkActive', 'active');
    document.getElementById(menu).setAttribute('href', '#/dashboard');
  }

  jorge() {
    this.router.navigate(['dashboard']);
    document.getElementById('menu0').setAttribute('routerLinkActive', 'active');
    document.getElementById('menu0').setAttribute('ng-reflect-router-link-active', 'active');
    this.router.isActive('dasboard', true);
    
  }

  cerrarSesionYSalir() {
    localStorage.clear();
    this.router.navigate(['/login'], { replaceUrl: true });
  }

}
