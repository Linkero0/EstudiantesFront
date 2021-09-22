import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { PeticionesService } from '../services/peticiones.service';
import { Estudiante } from '../Models/Estudiante.model';

@Component({
  selector: 'app-list-estudents', //  Se usa para llamar el componente 
  templateUrl: './list-estudents.component.html',
  styleUrls: ['./list-estudents.component.css'],
  providers:[PeticionesService],

})
export class ListEstudentsComponent implements OnInit {
  public titulo: string;
  public detalle: string;
  public estudiantes?: Estudiante[];

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _peticionesService:PeticionesService,
    ) 
    {
    this.titulo = "Listado de estudiantes";
    this.detalle = "Lista de estudiantes";   
  }


  ngOnInit(): void {// se ejecuta cuando inicia el componente
    this.getAllStudents();
   
  
  }
  ngDoCheck() { // Se ejecuta cuando se cambia el componente


  }

  ngOnDestroy() {


  }
  cambiarTitulo() {

    
  }

  EliminarEstudiante(id:number){
    
    console.log(id);


  }

  EditarEstudiante(id:number){
      console.log(id);
  }
  getAllStudents():void{

    this._peticionesService.getEstudents().subscribe(
      data=>{
        this.estudiantes = data;
        console.log(this.estudiantes);
   
      },
      
      error =>{ 
        console.log(<any>error)
      }
 
     )
  }
}
