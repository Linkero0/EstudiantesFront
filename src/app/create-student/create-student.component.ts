import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { PeticionesService } from '../services/peticiones.service';
import { Estudiante } from '../Models/Estudiante.model';
@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  profileForm = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    fecNacimiento: new FormControl(''),
  });
  public estudiantes: Estudiante = {};
  constructor(private _peticionesService:PeticionesService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.estudiantes = this.profileForm.value;
    this.estudiantes.id = undefined;
    console.log(this.estudiantes);
     this._peticionesService.addEstudent(this.estudiantes)
      .subscribe(data => {
        console.log(data);
        this.profileForm.reset();
       
      })      
   
  }
}
