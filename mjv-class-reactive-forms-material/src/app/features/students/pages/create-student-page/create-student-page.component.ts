import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageDialogComponent } from 'src/app/shared/dialogs/message-dialog/message-dialog.component';
import { Student } from '../../models/student.model';
import { StudentsService } from '../../services/students.service';

@Component({
  templateUrl: './create-student-page.component.html',
  styleUrls: ['./create-student-page.component.scss']
})
export class CreateStudentPageComponent implements OnInit {

  student: Student = this.studentsService.getDefaultStudent();

  studentForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('exemplo@gmail.com', [
      Validators.required,
      Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    monthlyPayment: new FormControl(0, [
      Validators.required,
      Validators.min(100),
      Validators.max(1500)
    ]),
    inclusionDate: new FormControl(this.student.inclusionDate),
    lastMontlyPayment: new FormControl(this.student.lastMontlyPayment),
    course: new FormControl('', [Validators.required])
  });

  constructor(
    private studentsService: StudentsService,
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.studentForm.controls.inclusionDate.disable();
    this.studentForm.controls.lastMontlyPayment.disable();
  }

  onSubmit() {
    const formValue = this.studentForm.value;
    this.student.name = formValue.name;
    this.student.email = formValue.email;
    this.student.password = formValue.password;
    this.student.monthlyPayment = formValue.monthlyPayment;
    this.student.course = formValue.course;
    this.studentsService.createStudent(this.student)
    .subscribe(() => {
      this.dialog.open(MessageDialogComponent, {
        data: {
          mensagem: 'Estudante Adicionado com Sucesso!'
        }
      });
      this.router.navigateByUrl('/students');
    }, (err) => console.log(err));
    
  }

}
