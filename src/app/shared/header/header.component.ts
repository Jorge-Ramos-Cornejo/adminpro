import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/+services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  frmBuscar: FormGroup;
  constructor(private authService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    this.frmBuscar = new FormGroup({
      buscar: new FormControl(''),
    });
  }

  logout(): void {
    // tslint:disable-next-line: deprecation
    event.preventDefault();
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
