import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  constructor() { 


    this.subscription = this.regresaObservable().pipe(
      retry(2)  // para que el observable intente otra vez cuando aha un error y solo sera dos veces el intento
    )
    .subscribe(
      mensaje => console.log('Subs', mensaje), //cuando es un next en el observable
      error => console.error('Error en el subs', error), //cuando haya un error
      () => console.log('El observador termino!')
    )
  }

  ngOnInit() {
  }

  ngOnDestroy() { 
    console.log('La pagina se va a cerrar');
    this.subscription.unsubscribe();

  }

  regresaObservable(): Observable<any> { //regresa un number o string
    const obs: Observable<any> = new Observable((observer: Subscriber<any>) => {
      let contador = 0;
      let intervalo = setInterval(()=> {
        contador += 1;
        const salida = {
          valor: contador
        }
        observer.next(salida);
        // if( contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }
        
        // if( contador === 2) { //mandar un error
        //   // clearInterval(intervalo);
        //   observer.error('AUxilio!');
        // }
      }, 1000);
    }).pipe(
      map( resp => {
        return resp.valor
      }),
      filter( (valor, index) => {  // Solo retorna un true o falso si de psar o no debe pasar
        if( (valor % 2) === 1) { // En este caso solo retornaremos los numeros impares
          return true;
        } else {
          return false;
        }        
      })
    );
    return obs;
  }

}
