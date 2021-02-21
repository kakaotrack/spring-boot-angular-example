import { Injectable, OnInit } from "@angular/core";
import { Subject } from "rxjs";


@Injectable()
export class TaskEditModeService {

    private emitEditMode = new Subject<any>();

    editEmitted$ = this.emitEditMode.asObservable();

    editMode(id: any) {
        console.log('editMode : ' + id);
        this.emitEditMode.next(id);
    }
}
