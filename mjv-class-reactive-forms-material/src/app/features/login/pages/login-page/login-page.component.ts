import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/features/students/services/students.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  error: boolean = false;

  email?: string;
  password?: string;

  constructor(
    private studentService: StudentsService,
    private router: Router) { }

  ngOnInit(): void {
  }

  authenticate() {
    const student = this.studentService.getStudentByEmailAndPassword(this.email, this.password);
    if (!student) {
      this.error = true;
    } else {
      sessionStorage.setItem('student', JSON.stringify(student));
      this.router.navigateByUrl('students');
    }

  }

  validateUser(loginForm: NgForm) {
    // const data = loginForm.value;
    // const student = this.studentService.getStudentByEmailAndPassword(data.email, data.password);
    // if(!student) {
    //   return this.error = true;
    // }
    // sessionStorage.setItem('student', JSON.stringify(student));
    // return this.router.navigateByUrl('students');
  }

}
