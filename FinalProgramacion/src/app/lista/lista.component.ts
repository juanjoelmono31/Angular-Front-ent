import { Component, OnInit } from '@angular/core';
import{NgxSpinnerService } from 'ngx-spinner'; 

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

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
