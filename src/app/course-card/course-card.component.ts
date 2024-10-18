import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
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

  // custom classes based on course category to apply custom styling
  cardClasses() {
    if (this.course.category == 'BEGINNER') {
      return ['beginner'];
    }
  }
}
