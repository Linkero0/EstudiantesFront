import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from '../Models/Estudiante.model';
import { FormGroup,FormControl } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class PeticionesService {
  public url: string;
  constructor(
    public _http: HttpClient
  ) {
    this.url = "  https://localhost:44375/"
  }
  


  getEstudents(): Observable<Estudiante[]> {

    return this._http.get<Estudiante[]>(this.url + 'api/Estudiante');
  }

  addEstudent(estudiante: Estudiante): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(estudiante); 
    console.log(body)
    return this._http.post(this.url + 'api/Estudiante', body,{'headers':headers})

  }
  getStudentById(idStudent: number): Observable<any> {
    return this._http.get<Estudiante>(this.url + 'api/Estudiante/'+idStudent);

  }
}
