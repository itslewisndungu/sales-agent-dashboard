import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { School } from "../types/types";

@Injectable({
  providedIn: "root"
})
export class SchoolsService {
  URL = "http://localhost:3000/schools";

  constructor(readonly http: HttpClient) {
  }

  getAllSchoolsList() {
    return this.http.get<School[]>(this.URL);
  }
}
