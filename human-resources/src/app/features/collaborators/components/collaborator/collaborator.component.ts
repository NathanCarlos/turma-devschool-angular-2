import { Component, Input, OnInit } from '@angular/core';
import { Collaborator } from '../../models/collaborator.model';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {

  @Input()
  colaborador?: Collaborator;

  constructor() { }

  ngOnInit(): void {
  }

  remove() {
    alert("Colaborador excluído com sucesso!");
  }

}
