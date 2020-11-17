import { Component, OnInit } from '@angular/core';
import{NgxSpinnerService } from 'ngx-spinner'; 

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner();
  }

  spinner(): void {
    this.spinnerService.show();
    setTimeout(() =>{
      this.spinnerService.hide();
    }, 2000);
  }

}
