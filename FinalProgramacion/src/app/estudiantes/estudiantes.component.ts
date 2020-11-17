import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../servicios/services.service';
import{NgxSpinnerService } from 'ngx-spinner'; 

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  
form: FormGroup;
  
  nombre: string;
  apellido: string;
  correo: string;
  tipoDocumento: Selection;
  documento: number;
  telefono: number;


  constructor(private servicio: ServicesService, private spinnerService: NgxSpinnerService) { }

  ngOnInit(){
    this.spinner();
 }
 
 spinner(): void {
  this.spinnerService.show();
  setTimeout(() =>{
    this.spinnerService.hide();
  }, 2000);
}

 enviarDatos(){
  const data = {
    "nombre": this.nombre,
    "apellido": this.apellido,
    "correo": this.correo,
    "tipoDocumento": this.tipoDocumento,
    "documento":this.documento,
    "telefono":this.telefono
  }
  this.servicio.postEstudiantes(data).then(dataForm => {
    console.log("DATOS ENVIADOS ", dataForm);
    alert('El estudiante se creo correctamente');

  }).catch(err =>
    alert('Sucedio un erro al crea el estudiante')

  );
 }

borrarDatos(){

  this.form.reset();

}

}
