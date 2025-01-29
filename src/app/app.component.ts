import { Component } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: false,
})
export class AppComponent {
  courses = [...COURSES];

  $emit: Course;
  title: string = "Ashok Reddy INDLA";
  price: number = 999.990454;
  rate: 0.67;

  onCardSelected(course: Course) {
    console.log("Card Click", course);
  }
  trackCourse(index: number, course: Course) {
    return course.id;
  }
}
