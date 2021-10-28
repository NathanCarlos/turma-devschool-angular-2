import { Component, OnInit } from '@angular/core';
import { Member } from '../../models/member.model';
import { MembersService } from '../../services/members.service';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss']
})
export class MembersListComponent implements OnInit {

  members: Array<Member> = [];

  filteredMembers: Array<Member> = [];

  constructor(private membersService: MembersService) { }

  ngOnInit(): void {
    this.members = this.membersService.getMembers();
    this.filteredMembers = this.members;
  }

  searchById(event: any) {
    const value = event.target.value;
    const filteredMembers = this.members.filter((member) => member.id == value);
    if(filteredMembers.length === 0) {
      return this.filteredMembers = this.members;
    }
    return this.filteredMembers = filteredMembers;
  }

  searchByName(event: any) {
    const value = event.target.value;
    const filteredMembers = this.members.filter((member) => member.nome.toUpperCase().search(value.toUpperCase()) > -1);
    this.filteredMembers = filteredMembers;
  }

}
