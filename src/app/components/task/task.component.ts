import { Component, OnInit } from '@angular/core';
import { TaskApiService } from '../../services/task-api.service'
import { Task } from 'app/models/task';
import { Observable } from "rxjs";
import { Page } from "../../models/common";

@Component({
    selector: 'tasks',
    templateUrl: 'task.component.html',
    styleUrls: ['task.component.scss'],
    providers: [TaskApiService]
})
export class TaskComponent implements OnInit {

    tasks$: Observable<Page<Task>>;

    constructor(private taskApiService: TaskApiService) {
    }

    ngOnInit() {
        this.refresh();
        this.taskApiService.subscribe()
            .subscribe({
                next: (event: MessageEvent) => {
                    this.tasks$ = this.taskApiService.getTasks()
                }
            });
    }

    refresh() {
        this.tasks$ = this.taskApiService.getTasks();
    }
}
