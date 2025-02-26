import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "../model/course";

@Injectable({
  providedIn: "root",
})
export class CoursesService {
  constructor(private http: HttpClient) {
    console.log("Creating the services...");
  }
  loadCourses(): Observable<Course[]> {
    // return this.http.get<Course[]>('/api/courses'); To get all courses
    const params = new HttpParams().set("page", "1").set("pageSize", "10");
    return this.http.get<Course[]>("/api/courses", { params });
  }
}
