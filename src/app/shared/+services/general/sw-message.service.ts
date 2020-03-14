import Swal from 'sweetalert2';
import { Injectable } from '@angular/core';
import { AlertService } from 'ngx-alerts';

@Injectable({
  providedIn: 'root'
})
export class SWMessageService {
  [x: string]: any;
  titleDefault = '<strong>SISTRAD</strong>';

  constructor(private alertService: AlertService) {}


  showErrorMessage(message: string) {
    Swal.fire({
      icon: 'error',
      title: '',
      text: message,
      customClass: {
        container: 'container-message'
      }
    });
  }

  showErrorAlert(message: string) {
    this.alertService.danger(message);
  }

  showSuccesAlert(message: string) {
    this.alertService.success(message);
  }

  // showWarningMessage(message: string) {
  //   Swal.fire({
  //     type: 'warning',
  //     title: this.titleDefault,
  //     text: message,
  //     customClass: 'container-message'
  //   });
  // }

  showWarningAlert(message: string) {
    this.alertService.warning(message);
  }

  // showSuccessMessage(
  //   message: string = 'OPERACION REALIZADA CORRECTAMENTE',
  //   callback: (value: any) => void
  // ) {
  //   Swal.fire({
  //     type: 'success',
  //     title: this.titleDefault,
  //     text: message,
  //     customClass: 'container-message'
  //   }).then(result => callback(result.value));
  // }

  // showConfirmationMessage(message: string, callback: (value: any) => void) {
  //   Swal.fire({
  //     title: this.titleDefault,
  //     text: message,
  //     type: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'SI',
  //     cancelButtonText: 'NO',
  //     customClass: 'container-message',
  //     allowOutsideClick: false
  //   }).then(result => callback(result.value));
  // }

  // async showInputTextAreaDialog(): Promise<string> {
  //   const { value: text } = await Swal.fire({
  //     input: 'textarea',
  //     inputPlaceholder: 'Ingrese una observación',
  //     showCancelButton: true,
  //     cancelButtonText: 'Cancelar',
  //     customClass: 'container-message'
  //   });
  //   return new Promise<string>((resolve, reject) => {
  //     resolve(text);
  //   });
  // }

  // async showInputTextDialog(title, placeholder): Promise<string> {
  //   const { value: text } = await Swal.fire({
  //     title: title,
  //     input: 'text',
  //     inputPlaceholder: placeholder,
  //     showCancelButton: true,
  //     cancelButtonText: 'Cancelar',
  //     customClass: 'container-message'
  //   });
  //   return new Promise<string>((resolve, reject) => {
  //     resolve(text);
  //   });
  // }
}
