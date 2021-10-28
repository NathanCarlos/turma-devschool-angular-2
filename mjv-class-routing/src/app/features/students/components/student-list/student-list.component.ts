import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  students: Array<Student> = [
    {
      id: 1,
      nome: 'Nathan',
      mensalidade: 350
    },
    {
      id: 2,
      nome: 'Erika',
      mensalidade: 250
    },
    {
      id: 3,
      nome: 'Lais',
      mensalidade: 250
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
