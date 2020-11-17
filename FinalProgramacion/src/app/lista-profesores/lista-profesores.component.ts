import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ServicesService } from '../servicios/services.service';

@Component({
  selector: 'app-lista-profesores',
  templateUrl: './lista-profesores.component.html',
  styleUrls: ['./lista-profesores.component.css']
})
export class ListaProfesoresComponent implements OnInit {

  listaProfesores;

  constructor(private spinnerService: NgxSpinnerService, private servicio: ServicesService) { }

  ngOnInit() {
    this.spinner();
    this.servicio.getProfesores().subscribe(data => {
      console.log(data);
      this.listaProfesores = data;
    });
  }

  spinner(): void {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 2000);
  }

}
