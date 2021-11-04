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
      email: 'nathan@gmail.com',
      senha: '123456',
      valorMensalidade: 100,
      dataUltimoPgto: '2021-07-23',
      dataInclusaoSistema: '2021-07-01'
    },
    { 
      id: 2,
      nome: 'Palloma',
      email: 'palloma@gmail.com',
      senha: '123456',
      valorMensalidade: 250,
      dataUltimoPgto: '2021-10-23',
      dataInclusaoSistema: '2021-07-01'
    },
    { 
      id: 3,
      nome: 'Alan Jhonnes',
      email: 'alan@gmail.com',
      senha: '123456',
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

  getMemberByEmailAndPassword(email: string, senha: string) {
    return this.members.find((member) => member.email === email && member.senha === senha);
  }
}
