import { Component, OnInit } from '@angular/core';
import { TaskApiService } from '../../services/task-api.service'
import { Task } from 'app/models/task';
import { Observable } from "rxjs";
import { Page } from "../../models/common";

@Component({
    selector: 'tasks',
    templateUrl: 'task-list.component.html',
    providers: [TaskApiService]
})
export class TaskListComponent implements OnInit {
    tasks$: Observable<Page<Task>>;

    constructor(private taskApiService: TaskApiService) {
    }

    ngOnInit() {
        this.tasks$ = this.taskApiService.getTasks();
        this.taskApiService.subscribe()
            .subscribe({
                next: (event: MessageEvent) => {
                    console.log("Observer : " + event.data);
                    this.tasks$ = this.taskApiService.getTasks()
                }
            });
    }
}
