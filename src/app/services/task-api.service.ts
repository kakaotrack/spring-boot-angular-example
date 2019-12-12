import { Injectable } from '@angular/core'
import { Observable, Subject } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Task } from 'app/models/task';
import { Page } from "../models/common";


@Injectable()
export class TaskApiService {
    constructor(private http: HttpClient) {
    }

    getTasks(): Observable<Page<Task>> {
        return this.http.get<Page<Task>>("/api/tasks");
    }

    getTask(id: number): Observable<Task> {
        return this.http.get<Task>(`/api/tasks/${id}`);
    }

    createTask(task: Task): Observable<Task> {
        let bodyString = JSON.stringify(task);
        const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
        console.log("Creating Task : " + bodyString);
        return this.http.post<Task>("/api/tasks", bodyString, httpOptions);
    }

    updateTask(task: Task): Observable<Task> {
        let bodyString = JSON.stringify(task);
        const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
        console.log("Updating Task : " + bodyString);
        return this.http.put<Task>("/api/tasks/" + task.id, bodyString, httpOptions)
    }

    subscribe(): Subject<any> {
        let eventSource = new EventSource("/api/tasks/subscribe");
        let subscription = new Subject();
        eventSource.addEventListener("message", event => {
            console.info("Got event: " + event.data);
            subscription.next(event);
        });
        return subscription;
    }
}
