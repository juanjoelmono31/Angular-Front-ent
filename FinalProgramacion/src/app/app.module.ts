import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { RouterModule } from '@angular/router';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { MenuComponent } from './menu/menu.component';
import { MateriasComponent } from './materias/materias.component';
import { InicioComponent } from './inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaComponent } from './lista/lista.component';

//External 
import{NgxSpinnerModule } from 'ngx-spinner';
import { ListaProfesoresComponent } from './lista-profesores/lista-profesores.component';
import { NotasEstudianteComponent } from './notas-estudiante/notas-estudiante.component';




@NgModule({
  declarations: [
    AppComponent,
    EstudiantesComponent,
    ProfesoresComponent,
    MenuComponent,
    MateriasComponent,
    InicioComponent,
    ListaComponent,
    ListaProfesoresComponent,
    NotasEstudianteComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
