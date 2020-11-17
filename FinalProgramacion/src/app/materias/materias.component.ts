import { Component, OnInit } from '@angular/core';
import{NgxSpinnerService } from 'ngx-spinner'; 
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
  nombreEstudiante
  constructor(private spinnerService: NgxSpinnerService, private servicio: ServicesService) { }

  ngOnInit(){
    this.spinner();
    this.servicio.getNombreMaterias().subscribe(data => {
      console.log(data);
      this.nombreMaterias = data;
    });

    this.servicio.getEstudiantes().subscribe(data => {
      console.log(data);
      this.estudiantes = data;
    });
 }
 
 spinner(): void {
  this.spinnerService.show();
  setTimeout(() =>{
    this.spinnerService.hide();
  }, 2000);
}



}
