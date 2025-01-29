import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
  NgModule,
} from "@angular/core";
import { Course } from "../model/course";
import { CommonModule } from "@angular/common";

@Component({
  selector: "course-card",
  imports: [CommonModule],
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

  cardClasses() {
    if (this.course.category == "BEGINNER") {
      return "beginner";
    }
  }
  cardStyles() {
    return { "background-image": "url(" + this.course.iconUrl + ")" };
  }
}
