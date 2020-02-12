import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  frmBuscar: FormGroup;
  constructor() { }

  ngOnInit() {
    this.frmBuscar = new FormGroup({
      buscar: new FormControl(''),
    });
  }

}
