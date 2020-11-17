import { Component, OnInit } from '@angular/core';
import{NgxSpinnerService } from 'ngx-spinner'; 

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {

  constructor(private spinnerService: NgxSpinnerService) { }

  ngOnInit(){
    this.spinner();
 }
 
 spinner(): void {
  this.spinnerService.show();
  setTimeout(() =>{
    this.spinnerService.hide();
  }, 2000);
}

}
