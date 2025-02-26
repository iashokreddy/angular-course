import { Component, Inject, OnInit } from "@angular/core";
import { Course } from "./model/course";
import { Observable } from "rxjs";
import { CoursesService } from "./services/courses.service";
import { AppConfig, CONFIG_TOKEN } from "./config";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: false,
  providers: [CoursesService]
})
export class AppComponent implements OnInit {
  courses$: Observable<Course[]>;

  constructor(
    // @Optional() // decorator to make coursesServices data optional null.
    private coursesServices: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig
  ) {
    console.log("Config", config);
  }

  ngOnInit() {
    this.courses$ = this.coursesServices.loadCourses();
  }
  save(course: Course) {
    this.coursesServices.saveCourse(course);
  }
}
