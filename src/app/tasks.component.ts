import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TasksService } from './tasks-service';

@Component({
  selector: 'app-tasks',
  template: `
  <ul *ngIf="tasksFiltered$ | async as tasks">
    <li *ngFor="let task of tasks, index as i" id="i">
        <span>{{task.title}}</span>
    </li>
  </ul>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksComponent {

  tasksFiltered$ = this.tasksService.tasks$

  constructor(private tasksService: TasksService) { }

}
