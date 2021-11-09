import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../../models/member.model';
import { MembersService } from '../../services/members.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.scss']
})
export class CreateMemberComponent implements OnInit {

  member: Member = this.membersService.getDefaultMember();

  memberForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('example@gmail.com', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
    valorMensalidade: new FormControl(150, [Validators.required, Validators.max(1000)]),
    dataInclusao: new FormControl(this.member.dataInclusaoSistema),
    dataUltimoPgto: new FormControl(this.member.dataUltimoPgto)
  });

  constructor(
    private membersService: MembersService,
    private router: Router) { }

  ngOnInit(): void {
    this.memberForm.controls.dataInclusao.disable();
    this.memberForm.controls.dataUltimoPgto.disable();
  }

  createMember() {
    const formValue = this.memberForm.value;
    this.member.nome = formValue.nome;
    this.member.email = formValue.email;
    this.member.senha = formValue.senha;
    this.member.valorMensalidade = formValue.valorMensalidade;

    this.membersService.createMember(this.member);
    alert('Membro adicionado com sucesso!');
    this.router.navigateByUrl('/members');
  }

}
