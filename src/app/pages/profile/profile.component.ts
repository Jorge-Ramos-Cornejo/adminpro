import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  form: FormGroup;
  editarEstado: boolean = false;
  hide = true;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      usuario: new FormControl('jorger'),
      password: new FormControl('ramos'),
      newPassword: new FormControl(''),
      repetirPassword: new FormControl('')
    });
  }

  editar() {
   this.editarEstado = true;
  }

}
