import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from "./components/task/task-list.component";
import { AppComponent } from "./components/app/app.component"
import { TaskCreateComponent } from "./components/task/task-create.component";
import { TaskEditComponent } from "./components/task/task-edit.component";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

const appRoutes: Routes = [
    {path: 'list', component: TaskListComponent},
    {path: 'edit/:id', component: TaskEditComponent},
    {path: 'create', component: TaskCreateComponent},
    {path: '', component: TaskListComponent},
    {path: '*', component: TaskListComponent},
];

@NgModule({
    declarations: [
        TaskListComponent,
        TaskCreateComponent,
        TaskEditComponent,
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' })
    ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
