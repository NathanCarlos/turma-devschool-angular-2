import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './components/student/student.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentsComponent } from './pages/students/students.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    StudentComponent,
    StudentListComponent,
    StudentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class StudentsModule { }
