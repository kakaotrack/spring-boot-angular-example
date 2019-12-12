import { Component } from '@angular/core';
import { TaskApiService } from '../../services/task-api.service'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'create-task',
    templateUrl: 'task-create.component.html',
    providers: [TaskApiService]
})
export class TaskCreateComponent {

    taskModel: FormGroup;

    constructor(private taskApiService: TaskApiService, private router: Router, fb: FormBuilder) {
        this.taskModel = fb.group({
            "title": ['', [Validators.required, Validators.minLength(2)]],
            "description": ['', [Validators.required, Validators.minLength(2)]]
        })
    }

    createValue() {
        let task = this.taskModel.value;
        if (this.taskModel.valid) {
            this.taskApiService.createTask(task).subscribe(createdTask => {
                console.debug("created task: " + createdTask);
                this.router.navigate(['list']);
            })
        }
    }

}
