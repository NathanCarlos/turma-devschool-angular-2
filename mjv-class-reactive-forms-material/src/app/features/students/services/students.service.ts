import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseMessage } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  students: Array<Student> = [];
  urlBackEnd = environment.urlBackEnd;
  headers = {
    'Content-type': 'application/json'
  };

  constructor(private httpClient: HttpClient) { }

  getDefaultStudent(): Student {
    const dateToday = moment().format('YYYY/MM/DD');
    return {
      name: '',
      email: '',
      password: '',
      monthlyPayment: 0,
      inclusionDate: dateToday,
      lastMontlyPayment: dateToday,
      validRegistration: true,
      course: ''
    }
  }

  getStudents() {
    return this.httpClient.get<Array<Student>>(`${this.urlBackEnd}/students`, { headers: this.headers });
  }

  getStudentByEmailAndPassword(email: string | undefined, password: string | undefined) {
    const body = {
      email,
      password
    };
    return this.httpClient.post<Student>(`${this.urlBackEnd}/students/authenticate`, body, { headers: this.headers });
  }

  getStudentById(id: number) {
    return this.httpClient.get<Student>(`${this.urlBackEnd}/students/id/${id}`, { headers: this.headers });
  }

  getStudentByName(name: string) {
    return this.students.find((student) => student.name === name);
  }

  getStudentsByFilterName(name: string) {
    return this.students.filter((student) => student.name.toUpperCase().search(name.toUpperCase()) > -1);
  }

  getStudentsByFilterId(id: number) {
    const student = this.getStudentById(Number(id));
    if(!student) {
      return [];
    }
    return [student];
  }

  createStudent(student: Student) {
    return this.httpClient.post<Student>(`${this.urlBackEnd}/students/create`, student, { headers: this.headers });
  }

  removeStudent(id: number | undefined) {
    return this.httpClient.delete<ResponseMessage>(`${this.urlBackEnd}/students/remove/${id}`, { headers: this.headers });
  }

}
