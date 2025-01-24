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

  onCardSelected(course: Course) {
    console.log("Card Click", course);
  }
}
