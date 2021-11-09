import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CpfPipe } from './pipes/cpf.pipe';
import { RedDirective } from './directives/red.directive';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MessageDialogComponent } from './dialogs/message-dialog/message-dialog.component';

const materialModules = [
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule
];

const components = [
  HeaderComponent,
  FooterComponent,
  MessageDialogComponent
];

const pipes = [CpfPipe];

const directives = [RedDirective];

@NgModule({
  declarations: [
    ...components,
    ...pipes,
    ...directives,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ...materialModules,
  ],
  exports: [
    ...components,
    ...pipes,
    ...directives,
    ...materialModules,
  ]
})
export class SharedModule { }
