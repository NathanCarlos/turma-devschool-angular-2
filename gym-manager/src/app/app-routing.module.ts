import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './features/login/pages/login-page/login-page.component';
import { RegisterPageComponent } from './features/login/pages/register-page/register-page.component';
import { CreateMemberComponent } from './features/members/pages/create-member/create-member.component';
import { MemberDetailsComponent } from './features/members/pages/member-details/member-details.component';
import { MembersPageComponent } from './features/members/pages/members-page/members-page.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'members', component: MembersPageComponent, canActivate: [AuthGuard] },
  { path: 'member-details/:id', component: MemberDetailsComponent, canActivate: [AuthGuard] },
  { path: 'create-member', component: CreateMemberComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
