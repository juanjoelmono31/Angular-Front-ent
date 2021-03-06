import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ServicesService } from '../servicios/services.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  // variable para guardar la informacion traida del back
  listaEstudiantes;

  constructor(private spinnerService: NgxSpinnerService, private servicio: ServicesService) { }

  ngOnInit() {
    this.spinner();
    this.servicio.getEstudiantes().subscribe(data => {
      console.log(data);
      this.listaEstudiantes = data;
    });
  }

  spinner(): void {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 2000);
  }

}
