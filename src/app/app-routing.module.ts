import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEstudentsComponent } from './list-estudents/list-estudents.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { EditEstudentComponent } from './edit-estudent/edit-estudent.component';

const routes: Routes = [
{path:'ListaEstudiantes',component:ListEstudentsComponent},
{path:'ListaEstudiantes/:nombre',component:ListEstudentsComponent},
{path:'CrearEstudiante',component:CreateStudentComponent},
{path:'Home',component:HomeComponentComponent},
{path:'Editar/:id',component:EditEstudentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
