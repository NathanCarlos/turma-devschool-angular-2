import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollaboratorsListComponent } from './components/collaborators-list/collaborators-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CollaboratorComponent } from './components/collaborator/collaborator.component';



@NgModule({
  declarations: [
    CollaboratorsListComponent,
    CollaboratorComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CollaboratorsListComponent
  ]
})
export class CollaboratorsModule { }
