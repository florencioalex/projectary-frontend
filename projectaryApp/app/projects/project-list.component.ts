import { Component } from "@angular/core";

@Component({
	selector: "project-list",
	templateUrl: "app/projects/project-list.component.html",
    //styleUrls:["app/projects/project-list.component.css"]
})
 
export class ProjectListComponent{
 	title = 'Lista de Projectos';
    saudacao = 'Aqui apresenta a Listagem de Projectos'
    fim='DevPSI'
    today: number = Date.now();
}