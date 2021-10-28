import { Injectable } from '@angular/core';
import { Member } from '../models/member.model';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  members: Array<Member> = [
    {
      id: 1,
      nome: 'Nathan Carlos',
      valorMensalidade: 100,
      dataUltimoPgto: '2021-07-23',
      dataInclusaoSistema: '2021-07-01'
    },
    { 
      id: 2,
      nome: 'Palloma',
      valorMensalidade: 250,
      dataUltimoPgto: '2021-10-23',
      dataInclusaoSistema: '2021-07-01'
    },
    { 
      id: 3,
      nome: 'Alan Jhonnes',
      valorMensalidade: 350,
      dataUltimoPgto: '2021-08-23',
      dataInclusaoSistema: '2021-07-01'
    }
  ];

  constructor() { }

  getMembers() {
    return this.members;
  }

  getById(id: number) {
    return this.members.find((member) => member.id === id);
  }
}
