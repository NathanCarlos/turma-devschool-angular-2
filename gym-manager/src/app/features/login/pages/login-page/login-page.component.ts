import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MembersService } from 'src/app/features/members/services/members.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  email: string = "";
  senha: string = "";
  erro: boolean = false;

  constructor(
    private membersService: MembersService,
    private router: Router) { }

  ngOnInit(): void {
  }

  authentication() {
    const member = this.membersService.getMemberByEmailAndPassword(this.email, this.senha);
    if(!member) {
      this.erro = true;
    } else {
      sessionStorage.setItem('member', JSON.stringify(member));
      this.router.navigateByUrl('/members');
    }
  }

}
