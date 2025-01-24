import { Component, Input, OnInit, EventEmitter, Output } from "@angular/core";
import { Course } from '../model/course';

@Component({
  selector: "course-card",
  imports: [],
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: Course;
  @Input()
  cardIndex: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  constructor() {}
  ngOnInit() {}

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed() {
    console.log("Card button Click");
    this.courseSelected.emit(this.course);
  }
}
