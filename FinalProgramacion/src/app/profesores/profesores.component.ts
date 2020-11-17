
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../servicios/services.service';
import { NgxSpinnerService } from 'ngx-spinner';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {
  title = 'alertifyjs';

  nombre: string;
  apellido: string;
  correo: string;
  tipoDocumento: Selection;
  documento: string;
  telefono: string;

  constructor(private servicio: ServicesService, private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner();
  }

  spinner(): void {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 2000);
  }

  enviarDatos() {
    this.spinner();
    const data = {
      "nombre": this.nombre,
      "apellido": this.apellido,
      "correo": this.correo,
      "tipoDocumento": this.tipoDocumento,
      "documento": this.documento,
      "telefono": this.telefono

    }

    this.servicio.postProfesores(data).then(dataForm => {
      console.log("DATOS ENVIADOS ", dataForm);
      alertify.alert('Se creo el estudiante correctamente', function(){alertify.success('OK');});

    })
    alertify.alert('Courrio un error');

   
  }

  borrarDatos() {

    this.nombre = '';
    this.apellido = '';
    this.correo = '';
    // this.tipoDocumento = '';
    this.documento = '';
    this.telefono = '';

  }


}
