import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../Models/Estudiante.model';
import { PeticionesService } from '../services/peticiones.service';
import { Params } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-edit-estudent',
  templateUrl: './edit-estudent.component.html',
  styleUrls: ['./edit-estudent.component.css']
})
export class EditEstudentComponent implements OnInit {
  public estudiantes: Estudiante ={};
  public idEstudent:number = 0;

  constructor( private _route:ActivatedRoute,
    private _router:Router,
    private _peticionesService:PeticionesService,) { }
    

  ngOnInit(): void {
     this.getStudentByID();
  }

  getStudentByID():void{
    this._route.params.subscribe((params:Params)=>{
        this.idEstudent = params.id;
    });

    this._peticionesService.getStudentById(this.idEstudent).subscribe(
      data=>{
        this.estudiantes = data;   
      },
      
      error =>{ 
        console.log(<any>error)
      }
 
     )
  }

}
