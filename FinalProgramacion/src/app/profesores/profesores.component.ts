
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

  constructor(private router: Router) { 

  }

  ngOnInit(): void {
  }


  navegarHaciaEstudiantes(){

    this.router.navigate(['/estudiantes']);

  }
}
