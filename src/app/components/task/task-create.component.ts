import { Component, Output, EventEmitter } from '@angular/core';
import { TaskApiService } from '../../services/task-api.service'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Task } from "../../models/task";

@Component({
    selector: 'task-create',
    templateUrl: 'task-create.component.html',
    providers: [TaskApiService]
})
export class TaskCreateComponent {

    @Output()
    create = new EventEmitter<Task>();

    isOpenCreateTask: boolean = false;

    taskForm: FormGroup;

    constructor(private taskApiService: TaskApiService, private router: Router, fb: FormBuilder) {
        this.taskForm = fb.group({
            "title": ['', [Validators.required, Validators.minLength(2)]],
            "description": ['', [Validators.required, Validators.minLength(2)]]
        })
    }

    save() {
        if (this.taskForm.valid) {
            this.taskApiService.createTask(this.taskForm.value).subscribe(task => {
                this.close();
                this.create.emit(task);
            })
        }
    }

    createTask() {
        this.isOpenCreateTask = true;
    }

    close() {
        this.isOpenCreateTask = false;
    }
}
