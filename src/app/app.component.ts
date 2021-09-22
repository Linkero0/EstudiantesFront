import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Estudiantes';
  public mostrarList:boolean = true;
  ocultarLista(value:boolean){

    this.mostrarList = value;
  }
}
