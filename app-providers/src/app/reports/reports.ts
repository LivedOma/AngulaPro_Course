import { Component, Inject, inject } from '@angular/core';
import { CourseService } from '../course.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-reports',
  imports: [],
  templateUrl: './reports.html',
  styleUrl: './reports.css'
})
export class Reports {
  instanceCourse: CourseService;

  constructor(instanceCourse: CourseService, log: LogService, @Inject('API_URL') apiUrl: string) {
    this.instanceCourse = instanceCourse;
    console.log("Courses from Reports:", this.instanceCourse.courses);
    log.add('Course component initialized');
    console.log("API URL:", apiUrl);
  }

  listCourses() {
    return this.instanceCourse.courses;
  }
}
