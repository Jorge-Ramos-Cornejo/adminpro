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


  cerrarSesionYSalir() {
    localStorage.clear();
    this.router.navigate(['/login'], { replaceUrl: true });
  }

}
