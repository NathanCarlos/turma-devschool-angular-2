import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberComponent } from './components/member/member.component';
import { MembersListComponent } from './components/members-list/members-list.component';
import { MembersPageComponent } from './pages/members-page/members-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MemberDetailsComponent } from './pages/member-details/member-details.component';
import { CreateMemberComponent } from './pages/create-member/create-member.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MemberComponent,
    MembersListComponent,
    MembersPageComponent,
    MemberDetailsComponent,
    CreateMemberComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class MembersModule { }
