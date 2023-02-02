import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest, map } from "rxjs";
import { Task } from "./task";

@Injectable({
    providedIn: 'root',
})
export class TasksService {

    filterSubject = new BehaviorSubject<string>('');
    filter$ = this.filterSubject.asObservable();
    tasks$ = combineLatest([this.filter$, this.http.get<Task[]>(`https://jsonplaceholder.typicode.com/todos`)])
        .pipe(
            map(([filter, tasks]) => tasks.filter((task) => task.title.includes(filter))));

    constructor(private http: HttpClient) {}

    setFilter(str: string){
        this.filterSubject.next(str);
    }

}