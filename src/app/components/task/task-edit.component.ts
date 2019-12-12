import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TaskApiService } from "../../services/task-api.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'edit-task',
    templateUrl: 'task-edit.component.html',
    providers: [TaskApiService]
})
export class TaskEditComponent implements OnInit {
    taskModel: FormGroup;

    constructor(private taskApiService: TaskApiService,
                private route: ActivatedRoute,
                private router: Router,
                private fb: FormBuilder) {
        this.taskModel = this.fb.group({
            "id": [],
            "title": ['', Validators.required],
            "description": ['', Validators.required],
            "version": ['']
        })
    }

    updateValue() {
        let task = this.taskModel.value;
        if (this.taskModel.valid) {
            this.taskApiService.updateTask(task).subscribe(updatedValue =>
                this.router.navigate(['list'])
            )
        }
    }

    ngOnInit() {
        let taskId = this.route.snapshot.params["id"];
        this.taskApiService
            .getTask(taskId).subscribe(value =>
            this.taskModel = this.fb.group({
                "id": [value.id],
                "title": [value.title, [Validators.required, Validators.minLength(2)]],
                "description": [value.description, [Validators.required, Validators.minLength(2)]],
                "version": [value.version]
            })
        )
    }
}
