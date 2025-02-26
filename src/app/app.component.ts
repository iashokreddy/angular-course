import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./course-card/course-card.component";
import { HighlightedDirective } from "./directives/highlighted.directive";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: false,
})
export class AppComponent implements OnInit {
  courses$: Observable<Course[]>;

  // courses;

  // HttpClient angular service
  constructor(private http: HttpClient) {}

  // useEffect for initial render to fetch data
  ngOnInit() {
    const params = new HttpParams().set("page", "1").set("pageSize", "10");

    this.courses$ = this.http.get<Course[]>("/api/courses", { params }); // get data based on params
    // this.courses$.subscribe((courses) => (this.courses = courses)); // courses assigned to api response
  }
}
