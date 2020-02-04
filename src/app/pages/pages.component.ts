import { Component, OnInit } from '@angular/core';

declare function init_plugins();
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }
 fecha: number;
  ngOnInit() {
    this.fecha = new  Date().getFullYear();
    init_plugins();
  }

}
