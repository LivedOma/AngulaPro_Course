import { Component, Inject } from '@angular/core';
import { CourseService } from '../course.service';
import { DateService } from '../date';

@Component({
  selector: 'app-students',
  imports: [],
  templateUrl: './students.html',
  styleUrl: './students.css'
})
export class Students {

  instanceCourse: CourseService;
  students: { name: string, id: number }[] = [];

  constructor(instanceCourse: CourseService, dateService: DateService, @Inject('ENVIRONMENT') private environtment: string) {
    this.instanceCourse = instanceCourse;
    this.instanceCourse.add('NestJS');

    console.log("Courses from Students:", this.instanceCourse.courses, "at ", dateService.getCurrentDate());
    console.log("Current Environment:", environtment);
  }

  add(name: string, course: { id?: number, title?: string }) {
    if(!course.id && course.title){
      const newCourse = this.instanceCourse.add(course.title);
      console.log(`Student ${name} added to course ${newCourse.title}`);
      
    }
    
  }

  private existCourse(id: number) {
    return this.instanceCourse.courses.some(course => course.id === id);
  }

  listStudentsByCourse() {
    return this.students.map(it => ({ ... it, courses: this.instanceCourse.courses.filter(el => el.id === it.id)}));
  }

}
