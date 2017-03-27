"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var project_component_1 = require("./projects/project.component");
var project_list_component_1 = require("./projects/project-list.component");
var router_1 = require("@angular/router");
//import { ProjectServiceComponent }from "./projects/project-list.component";
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            platform_browser_1.BrowserModule, router_1.RouterModule.forRoot([
                { path: '', component: home_component_1.HomeComponent },
                { path: 'home', component: home_component_1.HomeComponent },
                { path: 'project', component: project_component_1.ProjectComponent },
                { path: 'projectList', component: project_list_component_1.ProjectListComponent },
            ])
        ],
        declarations: [
            app_component_1.AppComponent, home_component_1.HomeComponent, project_component_1.ProjectComponent, project_list_component_1.ProjectListComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map