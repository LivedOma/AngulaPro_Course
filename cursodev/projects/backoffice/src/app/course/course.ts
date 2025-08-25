import { NgFor, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'cdev-course',
  imports: [CurrencyPipe],
  templateUrl: './course.html',
  styleUrls: ['./course.css'],
})
export class Course {
  title = 'Courses';

  courses = [
    {
      id: 1,
      name: 'Angular Basics',
      description: 'Learn the basics of Angular',
      duration: '3 hours',
      price: 29.99,
    },
    {
      id: 2,
      name: 'Advanced Angular',
      description: 'Deep dive into Angular',
      duration: '5 hours',
      price: 49.99,
    },
    {
      id: 3,
      name: 'Angular and Firebase',
      description: 'Build apps with Angular and Firebase',
      duration: '4 hours',
      price: 39.99,
    },
  ];
}
