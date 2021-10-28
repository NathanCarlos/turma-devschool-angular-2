import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from '../../models/member.model';
import { MembersService } from '../../services/members.service';

@Component({
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.scss']
})
export class MemberDetailsComponent implements OnInit {

  member?: Member;

  constructor(
    private activatedRoute: ActivatedRoute,
    private membersService: MembersService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const member = this.membersService.getById(parseInt(params.id));
      this.member = member;
    });
  }

}
