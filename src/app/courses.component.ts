import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template:` 
        <br/><br/>
        {{ text | summary:10 }}
        <br/><br/>

        <div (click)="onDivClicked()">    
            <button class="btn btn-primary" (click)="onSave($event)" [style.backgroundColor]="isActive ? 'blue':'white'">Save</button>
        </div>
        
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>

        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li> 
        </ul>

        {{ course.title | uppercase | lowercase}} <br/>
        {{ course.students | number}} <br/>
        {{ course.rating | number:'2.1-1' }} <br/>
        {{ course.price | currency:'AUD':true:'3.2-2'}} <br/>
        {{ course.releaseDate | date:'shortDate'}} <br/>

        <br/>

        <img src="{{ imageUrl }}" />
        
    `
})

export class CoursesComponent {
    text = `
    Lorem Ipsum is simply dummy text of the printing and typesetting
    `
    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }

    //onKeyUp($event){
    //    if ($event.keyCode === 13) console.log("ENTER was pressed");
    //}

    email = "me@example.com";

    onKeyUp(){
        console.log(this.email);
    }

    onDivClicked(){
        console.log("Div was clicked"); 
    }

    onSave($event){
        $event.stopPropagation();
        console.log("Button was clicked!", $event);
    }
    isActive = true;
    title = "List of courses";
    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    imageUrl = "http://lorempixel.com/400/200";
}

