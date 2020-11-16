import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
 }

 navegarHaciaProfesores(){

    this.router.navigate(['/profesores']);

 }

}
