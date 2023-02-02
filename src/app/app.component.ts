import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <span>Very simple filter search with observable state management</span>
    <app-filter></app-filter>
    <app-tasks></app-tasks>
  </div>`,
  styles: [``]
})
export class AppComponent {
}
