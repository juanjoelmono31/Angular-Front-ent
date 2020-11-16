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




@NgModule({
  declarations: [
    AppComponent,
    EstudiantesComponent,
    ProfesoresComponent,
    MenuComponent,
    MateriasComponent,
    InicioComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
