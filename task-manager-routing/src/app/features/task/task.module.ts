import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task/task.component';
import { TaskPageComponent } from './pages/task-page/task-page.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    TaskListComponent,
    TaskComponent,
    TaskPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TaskListComponent
  ]
})
export class TaskModule { }
