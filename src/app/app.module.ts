import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEstudentsComponent } from './list-estudents/list-estudents.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { EditEstudentComponent } from './edit-estudent/edit-estudent.component';
import { DateFormatPipe } from './Pipes/date-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListEstudentsComponent,
    CreateStudentComponent,
    HomeComponentComponent,
    EditEstudentComponent,
    DateFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
