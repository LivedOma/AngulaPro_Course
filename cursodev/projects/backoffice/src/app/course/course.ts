import { NgFor, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { CourseService } from '../course-service';

@Component({
  selector: 'cdev-course',
  imports: [CurrencyPipe],
  templateUrl: './course.html',
  styleUrls: ['./course.css'],
})
export class Course {
  title = 'Courses';
  courseService: CourseService;

  courses:{ id: number, name: string, description: string, duration: string, price: number }[] = [];

  constructor(courseService: CourseService) {
    this.courseService = courseService;
    this.courses = this.courseService.getCourses();
  }

  addCourse() {
    const newCourse = {
      id: this.courses.length + 1,
      name: 'New Course',
      description: 'Description of the new course',
      duration: '2 hours',
      price: 19.99,
    };
    this.courseService.addCourse(newCourse);
    this.courses = this.courseService.getCourses();
  }
}
