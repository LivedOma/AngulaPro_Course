import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
    private courses: { id: number, name: string, description: string, duration: string, price: number }[] = [
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
    {
      id: 4,
      name: 'RxJS in Angular',
      description: 'Reactive programming with RxJS in Angular',
      duration: '4 hours',
      price: 34.99,
    },
    {
      id: 5,
      name: 'Angular Testing',
      description: 'Learn how to test Angular applications',
      duration: '3 hours',
      price: 29.99,
    }
  ];

  constructor() {
    console.log("Courses initialized:", this.courses);
  }

  getCourses() {
    return [...this.courses];
  }

  addCourse(course: { id: number, name: string, description: string, duration: string, price: number }) {
    this.courses.push(course);
  }
}
