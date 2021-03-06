import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListaProfesoresComponent } from './lista-profesores/lista-profesores.component';
import { ListaComponent } from './lista/lista.component';
import { MateriasComponent } from './materias/materias.component';
import { MenuComponent } from './menu/menu.component';
import { NotasEstudianteComponent } from './notas-estudiante/notas-estudiante.component';
import { ProfesoresComponent } from './profesores/profesores.component';



const routes: Routes = [

  {path: 'estudiantes', component: EstudiantesComponent},
  {path: 'profesores', component: ProfesoresComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'materias', component: MateriasComponent},
  {path: 'lista', component: ListaComponent},
  {path: 'listaProfesores', component: ListaProfesoresComponent},
  {path: 'notasEstudiante', component:NotasEstudianteComponent},

  {path: '', redirectTo: '/inicio', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
