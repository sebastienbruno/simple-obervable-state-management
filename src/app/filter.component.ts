import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { TasksService } from "./tasks-service";

@Component({
    selector: 'app-filter',
    template: `
        <fieldset>
            <legend>Filter</legend>
            <label>Title</label>
            <input name="filter" [(ngModel)]="filter"/>
        </fieldset>
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Filter {
    #filter = '';

    @Input('filter')
    get filter(): string {
        return this.#filter;
    }
    set filter(str: string) {
        this.#filter = str;
        this.tasksService.setFilter(this.#filter);
    }
    
    constructor(private tasksService: TasksService) {}
}