import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-iconos-personalizados',
  templateUrl: './iconos-personalizados.component.html',
  styleUrls: ['./iconos-personalizados.component.scss']
})
export class IconosPersonalizadosComponent implements OnInit {
  constructor(
    public matIconRegistry: MatIconRegistry,
    public domSanitizer: DomSanitizer
  ) {}

  ngOnInit() {}

  public loadIconos() {
    // Para buscar obligado
    this.matIconRegistry.addSvgIcon(
      'sigo new-document',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../../../../assets/layout/images/iconos/newDocument.svg'
      )
    );
      
  
  }

}
