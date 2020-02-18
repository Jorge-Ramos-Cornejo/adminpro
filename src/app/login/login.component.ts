import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthenticationService } from 'src/app/shared/+services/auth/auth.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  @BlockUI() blockUI: NgBlockUI;

  constructor(public router: Router,
              private authService: AuthenticationService,) { }

  ngOnInit() {
    init_plugins();
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
    this.form = new FormGroup({
      usuario: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  async ingresar() {
    try {
      this.blockUI.start('Cargando');
      const usuario = this.form.value.usuario;
      const password = this.form.value.password;
      if (this.form.valid) {

        const result = await this.authService.login(
          usuario,
          password
        );
        
        console.log('resul', result);
        if (result.token) {
          this.router.navigate(['/dashboard']);
        } else {
          Swal.fire({
           title: 'error',
           icon: 'error',
           text: 'Revise sus credenciales',
           customClass: {
             container: 'container-message'
           }
          });
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      this.blockUI.stop();
    }
  }
}
