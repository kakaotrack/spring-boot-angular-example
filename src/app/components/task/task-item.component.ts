import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from "@angular/core";
import { Task } from "../../models/task";
import { TaskEditModeService } from "./task-edit-mode.service";
import { TaskApiService } from "../../services/task-api.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'task-view',
    templateUrl: 'task-item.component.html',
    styleUrls: ['task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {

    @Input()
    task: Task;

    @Output()
    modify = new EventEmitter<Task>();

    @Output()
    delete = new EventEmitter<Task>();

    editTask: Task;
    taskForm: FormGroup;

    isEditMode: boolean = false;

    constructor(
        private fb: FormBuilder,
        private taskApiService: TaskApiService,
        private taskEditModeService: TaskEditModeService
    ) {
        this.taskEditModeService.editEmitted$.subscribe(id => {
            if (this.task.id !== id) {
                this.close();
            }
        });
    }

    ngOnInit(): void {
        console.log(this.task);
        this.taskForm = this.fb.group({
            "id": this.task.id,
            "title": [this.task.title, Validators.required],
            "description": [this.task.description, Validators.required],
            "version": this.task.version
        });
    }

    editMode() {
        this.isEditMode = true;
        this.editTask = {...this.task};
        this.taskEditModeService.editMode(this.task.id);
    }

    modifyTask() {
        if (this.taskForm.valid) {
            this.taskApiService.updateTask(this.taskForm.value)
                .subscribe(task => {
                    this.modify.emit(task);
                    this.close();
                })
        }
    }

    deleteTask() {
        this.taskApiService.deleteTask(this.task)
            .subscribe(task => {
                this.delete.emit(task);
                this.close();
            })
    }

    close() {
        this.isEditMode = false;
    }


}
