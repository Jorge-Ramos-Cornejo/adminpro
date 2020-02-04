import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ButtonAnimations} from './button-animations';
import {BotonOpciones} from '../../+model/boton-opciones/boton-opciones.model';

@Component({
  selector: 'app-boton-opciones',
  templateUrl: './boton-opciones.component.html',
  styleUrls: ['./boton-opciones.component.scss'],
  animations: ButtonAnimations
})
export class BotonOpcionesComponent implements OnInit {

  @Input() options: Array<BotonOpciones>;
  @Output() idButton: EventEmitter <number> = new EventEmitter();
  buttons: Array<BotonOpciones> = [];
  fabTogglerState = 'inactive';

  constructor() {}

  ngOnInit() {
  }

  showItems() {
    this.fabTogglerState = 'active';
    this.buttons = this.options.map(r => Object.assign({}, r));
  }

  hideItems() {
    this.fabTogglerState = 'inactive';
    this.buttons = [];
  }

  onToggleFab() {
    this.buttons.length ? this.hideItems() : this.showItems();
  }

  retornarId(id: number) {
    this.idButton.emit(id);
    this.buttons.length ? this.hideItems() : this.showItems();
  }

  

}
