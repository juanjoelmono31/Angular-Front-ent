import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ServicesService } from '../servicios/services.service';
import * as alertify from 'alertifyjs';


@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {
  title = 'alertifyjs';

  nombreMaterias;
  nombreMateria;
  estudiantes;
  profesores;
  nombreEstudiante;
  nombreProfesor;
  primerCorte;
  segundoCorte;
  tercerCorte;

  constructor(private spinnerService: NgxSpinnerService, private servicio: ServicesService) { }

  ngOnInit() {
    this.spinner();

    this.servicio.getNombreMaterias().subscribe(data => {
      console.log(data);
      this.nombreMaterias = data;
    });

    this.servicio.getEstudiantes().subscribe(data => {
      console.log(data);
      this.estudiantes = data;
    });

    this.servicio.getProfesores().subscribe(data => {
      console.log(data);
      this.profesores = data;
    });
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
      "nombre": this.nombreMateria,
      "estudiante": this.nombreEstudiante,
      "profesor": this.nombreProfesor,
      "corte1": this.primerCorte,
      "corte2": this.segundoCorte,
      "corte3": this.tercerCorte,

    }

    this.servicio.postMaterias(data).then(dataForm => {
      console.log("DATOS ENVIADOS ", dataForm);
      alertify.alert(`Se ingreso correctamente las notas para el estudiante  ${this.nombreEstudiante}`, function () { alertify.success('Se ingreso correctamente'); });
      this.borrarDatos();
    }).catch(err => {
      alertify.alert('Ocurrio un error al ingresar las notas');
    });

  }

  borrarDatos() {

    this.nombreEstudiante = '';
    this.nombreProfesor = '';
    this.nombreMateria = '';
    this.primerCorte = '';
    this.segundoCorte = '';
    this.tercerCorte = '';
  
  }

}