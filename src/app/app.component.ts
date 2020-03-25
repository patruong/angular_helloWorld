import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title: string;
  post = {
    title: "Title",
    isFavorite: true
  }
  
  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite Changed: ", eventArgs);
  }

  tweet = {
    body: '...',
    likesCount: 10,
    isLiked: true
  }

  // Change variable for dynamically change List of courses above like button
  //courses = [1,2];

  // for ngSwitchCases
  viewMode = 'somethingElse';
  
  // ngFor and Change Detection
  onAdd() {
    this.courses.push({ id: 4, name: 'course4' });
  }

  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onChange(course) {
    course.name = 'UPDATED';
  }

  // ngFor and TrackBy

  courses = [];
  loadCourses() {
    this.courses = [
      { id: 1, name: 'course1 '},
      { id: 2, name: 'course2 '},
      { id: 3, name: 'course3 '},
    ]
  }

  trackCourse(index, course) {
    return course ? course.is : undefined;
  }

  task = {
    title: 'Review applciations',
    assignee: {
      name: 'John Smith'
    }
  }

}

