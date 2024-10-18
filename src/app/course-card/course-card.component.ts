import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input({ required: true })
  course: Course;

  @Input({ required: true })
  index: number;

  @Input({ required: true })
  count: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  onCourseViewed() {
    console.log('button-level event');
    this.courseEmitter.emit(this.course);
  }
}
