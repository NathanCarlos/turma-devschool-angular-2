import { Component, OnInit } from '@angular/core';
import { Member } from '../../models/member.model';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss']
})
export class MembersListComponent implements OnInit {

  members: Array<Member> = [
    {
      id: 1,
      nome: 'Nathan Carlos',
      valorMensalidade: 100,
      dataUltimoPgto: '2021-07-23',
      dataInclusaoSistema: '2021-07-01'
    },
    { id: 2,
      nome: 'Palloma',
      valorMensalidade: 250,
      dataUltimoPgto: '2021-10-23',
      dataInclusaoSistema: '2021-07-01'
    },
    { id: 3,
      nome: 'Alan Jhonnes',
      valorMensalidade: 350,
      dataUltimoPgto: '2021-08-23',
      dataInclusaoSistema: '2021-07-01'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
