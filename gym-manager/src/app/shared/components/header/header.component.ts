import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from 'src/app/features/members/models/member.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  member?: Member;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const memberStorage = sessionStorage.getItem('member');
    if(memberStorage) {
      this.member = JSON.parse(memberStorage);
    }
  }

  exit() {
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }

}
