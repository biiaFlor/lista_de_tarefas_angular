import { Component } from '@angular/core';
import { Tarefa } from './tarefa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lista de Tarefas';

  tarefas = [
    new Tarefa('Tarefa 1'),
    new Tarefa('Tarefa 2')
  ];

  adicionaTarefa = function adicionaTarefa(tiutlo: string) {
    this.tarefas.push(new Tarefa(tiutlo));
  }
}
