(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_task_task_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/task/task-list.component */ "./src/app/components/task/task-list.component.ts");
/* harmony import */ var _components_app_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/app/app.component */ "./src/app/components/app/app.component.ts");
/* harmony import */ var _components_task_task_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/task/task-create.component */ "./src/app/components/task/task-create.component.ts");
/* harmony import */ var _components_task_task_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/task/task-edit.component */ "./src/app/components/task/task-edit.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: 'list', component: _components_task_task_list_component__WEBPACK_IMPORTED_MODULE_4__["TaskListComponent"] },
    { path: 'edit/:id', component: _components_task_task_edit_component__WEBPACK_IMPORTED_MODULE_7__["TaskEditComponent"] },
    { path: 'create', component: _components_task_task_create_component__WEBPACK_IMPORTED_MODULE_6__["TaskCreateComponent"] },
    { path: '', component: _components_task_task_list_component__WEBPACK_IMPORTED_MODULE_4__["TaskListComponent"] },
    { path: '*', component: _components_task_task_list_component__WEBPACK_IMPORTED_MODULE_4__["TaskListComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_task_task_list_component__WEBPACK_IMPORTED_MODULE_4__["TaskListComponent"],
                _components_task_task_create_component__WEBPACK_IMPORTED_MODULE_6__["TaskCreateComponent"],
                _components_task_task_edit_component__WEBPACK_IMPORTED_MODULE_7__["TaskEditComponent"],
                _components_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_8__["HashLocationStrategy"] }],
            bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/app/app.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/app/app.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/app/app.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/app/app.component.ts ***!
  \*************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/components/app/app.component.html"),
            providers: []
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/task/task-create.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/task/task-create.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <form [formGroup]=\"taskModel\" class=\"form-horizontal\" (ngSubmit)=\"createValue()\">\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"title\" class=\"col-xs-2\">Title</label>\r\n                <div class=\"col-xs-6\">\r\n                    <input class=\"form-control\" id=\"title\" placeholder=\"Title\" formControlName=\"title\"/>\r\n                    <span [hidden]=\"!taskModel.hasError('required', 'value')\">Title is required..</span>\r\n                    <span [hidden]=\"!taskModel.hasError('minlength', 'value')\">At least 2 characters in length</span>\r\n                </div>\r\n              </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"description\" class=\"col-xs-2\">Description</label>\r\n                <div class=\"col-xs-6\">\r\n                    <input class=\"form-control\" id=\"description\" placeholder=\"Description\" formControlName=\"description\"/>\r\n                    <span [hidden]=\"!taskModel.hasError('required', 'value')\">Description is required..</span>\r\n                    <span [hidden]=\"!taskModel.hasError('minlength', 'value')\">At least 2 characters in length</span>\r\n                </div>\r\n            </div>\r\n\r\n            <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\"/>\r\n            <a [routerLink]=\"['/list']\">Task List</a>\r\n        </form>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/task/task-create.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/task/task-create.component.ts ***!
  \**********************************************************/
/*! exports provided: TaskCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskCreateComponent", function() { return TaskCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_task_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/task-api.service */ "./src/app/services/task-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskCreateComponent = /** @class */ (function () {
    function TaskCreateComponent(taskApiService, router, fb) {
        this.taskApiService = taskApiService;
        this.router = router;
        this.taskModel = fb.group({
            "title": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]],
            "description": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]]
        });
    }
    TaskCreateComponent.prototype.createValue = function () {
        var _this = this;
        var task = this.taskModel.value;
        if (this.taskModel.valid) {
            this.taskApiService.createTask(task).subscribe(function (createdTask) {
                console.debug("created task: " + createdTask);
                _this.router.navigate(['list']);
            });
        }
    };
    TaskCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'create-task',
            template: __webpack_require__(/*! ./task-create.component.html */ "./src/app/components/task/task-create.component.html"),
            providers: [_services_task_api_service__WEBPACK_IMPORTED_MODULE_1__["TaskApiService"]]
        }),
        __metadata("design:paramtypes", [_services_task_api_service__WEBPACK_IMPORTED_MODULE_1__["TaskApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], TaskCreateComponent);
    return TaskCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/task/task-edit.component.html":
/*!**********************************************************!*\
  !*** ./src/app/components/task/task-edit.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <form [formGroup]=\"taskModel\" class=\"form-horizontal\" (ngSubmit)=\"updateValue()\">\r\n            <input type=\"hidden\" formControlName=\"id\"/>\r\n            <input type=\"hidden\" formControlName=\"version\"/>\r\n            <div class=\"form-group\">\r\n                <label for=\"title\" class=\"col-xs-2\">Title</label>\r\n                <div class=\"col-xs-6\">\r\n                    <input class=\"form-control\" id=\"title\" placeholder=\"Title\" formControlName=\"title\"/>\r\n                    <span [hidden]=\"!taskModel.hasError('required', 'value')\">Title is required..</span>\r\n                    <span [hidden]=\"!taskModel.hasError('minlength', 'value')\">At least 2 characters in length</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"description\" class=\"col-xs-2\">Description</label>\r\n                <div class=\"col-xs-6\">\r\n                    <input class=\"form-control\" id=\"description\" placeholder=\"Description\" formControlName=\"description\"/>\r\n                    <span [hidden]=\"!taskModel.hasError('required', 'value')\">Description is required..</span>\r\n                    <span [hidden]=\"!taskModel.hasError('minlength', 'value')\">At least 2 characters in length</span>\r\n                </div>\r\n            </div>\r\n            <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\"/>\r\n            <a [routerLink]=\"['/list']\">Task List</a>\r\n        </form>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/task/task-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/task/task-edit.component.ts ***!
  \********************************************************/
/*! exports provided: TaskEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskEditComponent", function() { return TaskEditComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_task_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/task-api.service */ "./src/app/services/task-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskEditComponent = /** @class */ (function () {
    function TaskEditComponent(taskApiService, route, router, fb) {
        this.taskApiService = taskApiService;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.taskModel = this.fb.group({
            "id": [],
            "title": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            "description": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            "version": ['']
        });
    }
    TaskEditComponent.prototype.updateValue = function () {
        var _this = this;
        var task = this.taskModel.value;
        if (this.taskModel.valid) {
            this.taskApiService.updateTask(task).subscribe(function (updatedValue) {
                return _this.router.navigate(['list']);
            });
        }
    };
    TaskEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var taskId = this.route.snapshot.params["id"];
        this.taskApiService
            .getTask(taskId).subscribe(function (value) {
            return _this.taskModel = _this.fb.group({
                "id": [value.id],
                "title": [value.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2)]],
                "description": [value.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2)]],
                "version": [value.version]
            });
        });
    };
    TaskEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'edit-task',
            template: __webpack_require__(/*! ./task-edit.component.html */ "./src/app/components/task/task-edit.component.html"),
            providers: [_services_task_api_service__WEBPACK_IMPORTED_MODULE_1__["TaskApiService"]]
        }),
        __metadata("design:paramtypes", [_services_task_api_service__WEBPACK_IMPORTED_MODULE_1__["TaskApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]])
    ], TaskEditComponent);
    return TaskEditComponent;
}());



/***/ }),

/***/ "./src/app/components/task/task-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/components/task/task-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <table class=\"table table-bordered table-striped\" *ngIf=\"tasks$ | async as tasks\">\r\n            <thead>\r\n            <tr>\r\n                <th>Value</th>\r\n                <th>Actions</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let task of tasks.content; let e = even;\">\r\n                <td>{{ task.title }}</td>\r\n                <td><a [routerLink]=\"['/edit', task.id]\">Edit</a></td>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <a [routerLink]=\"['/create']\">New Value</a>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/task/task-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/task/task-list.component.ts ***!
  \********************************************************/
/*! exports provided: TaskListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListComponent", function() { return TaskListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_task_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/task-api.service */ "./src/app/services/task-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskListComponent = /** @class */ (function () {
    function TaskListComponent(taskApiService) {
        this.taskApiService = taskApiService;
    }
    TaskListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tasks$ = this.taskApiService.getTasks();
        this.taskApiService.subscribe()
            .subscribe({
            next: function (event) {
                console.log("Observer : " + event.data);
                _this.tasks$ = _this.taskApiService.getTasks();
            }
        });
    };
    TaskListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tasks',
            template: __webpack_require__(/*! ./task-list.component.html */ "./src/app/components/task/task-list.component.html"),
            providers: [_services_task_api_service__WEBPACK_IMPORTED_MODULE_1__["TaskApiService"]]
        }),
        __metadata("design:paramtypes", [_services_task_api_service__WEBPACK_IMPORTED_MODULE_1__["TaskApiService"]])
    ], TaskListComponent);
    return TaskListComponent;
}());



/***/ }),

/***/ "./src/app/services/task-api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/task-api.service.ts ***!
  \**********************************************/
/*! exports provided: TaskApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskApiService", function() { return TaskApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskApiService = /** @class */ (function () {
    function TaskApiService(http) {
        this.http = http;
    }
    TaskApiService.prototype.getTasks = function () {
        return this.http.get("/api/tasks");
    };
    TaskApiService.prototype.getTask = function (id) {
        return this.http.get("/api/tasks/" + id);
    };
    TaskApiService.prototype.createTask = function (task) {
        var bodyString = JSON.stringify(task);
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        console.log("Creating Task : " + bodyString);
        return this.http.post("/api/tasks", bodyString, httpOptions);
    };
    TaskApiService.prototype.updateTask = function (task) {
        var bodyString = JSON.stringify(task);
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        console.log("Updating Task : " + bodyString);
        return this.http.put("/api/tasks/" + task.id, bodyString, httpOptions);
    };
    TaskApiService.prototype.subscribe = function () {
        var eventSource = new EventSource("/api/tasks/subscribe");
        var subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        eventSource.addEventListener("message", function (event) {
            console.info("Got event: " + event.data);
            subscription.next(event);
        });
        return subscription;
    };
    TaskApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TaskApiService);
    return TaskApiService;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");


Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\revfactory\IdeaProjects\spring-boot-angular-sse\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map