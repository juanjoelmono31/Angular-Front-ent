import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ServicesService } from '../servicios/services.service';

@Component({
  selector: 'app-notas-estudiante',
  templateUrl: './notas-estudiante.component.html',
  styleUrls: ['./notas-estudiante.component.css']
})
export class NotasEstudianteComponent implements OnInit {
  notasEstudiantes;

  constructor(private spinnerService: NgxSpinnerService, private servicio: ServicesService) { }

  ngOnInit(): void {
    this.spinner();
    
    this.servicio.getMaterias().subscribe(data =>{
      console.log(data);

      this.notasEstudiantes = data;
      
    })

  }

  spinner(): void {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 2000);
  }

}
