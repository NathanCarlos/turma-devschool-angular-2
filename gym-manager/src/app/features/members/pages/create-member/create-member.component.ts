import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Member } from '../../models/member.model';
import { MembersService } from '../../services/members.service';

@Component({
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.scss']
})
export class CreateMemberComponent implements OnInit {

  member: Member = this.membersService.getDefaultMember();

  constructor(
    private membersService: MembersService,
    private router: Router) { }

  ngOnInit(): void {

  }

  createMember(memberForm: NgForm) {
    const formValue = memberForm.value;
    this.member.nome = formValue.nome;
    this.member.email = formValue.email;
    this.member.senha = formValue.senha;
    this.member.valorMensalidade = formValue.valorMensalidade;

    this.membersService.createMember(this.member);
    alert('Membro adicionado com sucesso!');
    this.router.navigateByUrl('/members');
  }

}
