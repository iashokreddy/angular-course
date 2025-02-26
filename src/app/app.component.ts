import { Component, OnInit } from "@angular/core";
import { Course } from "./model/course";
import { Observable } from "rxjs";
import { CoursesService } from "./services/courses.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: false,
  providers: [CoursesService],
})
export class AppComponent implements OnInit {
  courses$: Observable<Course[]>;

  constructor(private coursesServices: CoursesService) {}

  ngOnInit() {
    this.courses$ = this.coursesServices.loadCourses();
  }
  save(course: Course) {
    this.coursesServices.saveCourse(course);
  }
}
