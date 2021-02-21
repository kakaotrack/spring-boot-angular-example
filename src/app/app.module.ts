import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from "./components/task/task.component";
import { AppComponent } from "./components/app/app.component"
import { TaskCreateComponent } from "./components/task/task-create.component";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { TaskItemComponent } from "./components/task/task-item.component";
import { TaskEditModeService } from "./components/task/task-edit-mode.service";

const appRoutes: Routes = [
    {path: 'list', component: TaskComponent},
    {path: '', component: TaskComponent},
    {path: '*', component: TaskComponent},
];

@NgModule({
    declarations: [
        TaskComponent,
        TaskItemComponent,
        TaskCreateComponent,
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' })
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        TaskEditModeService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
