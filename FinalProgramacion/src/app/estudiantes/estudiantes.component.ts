import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../servicios/services.service';
import { NgxSpinnerService } from 'ngx-spinner';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  title = 'alertifyjs';

  form: FormGroup;

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
    this.servicio.postEstudiantes(data).then(dataForm => {
      console.log("DATOS ENVIADOS ", dataForm);
      alertify.alert('Se creo el estudiante correctamente', function(){alertify.success('Se creo correctamente');});
      this.borrarDatos();
    }).catch(err => {
      alertify.alert('Ocurrio un error al crear el estudiante');
    });
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
