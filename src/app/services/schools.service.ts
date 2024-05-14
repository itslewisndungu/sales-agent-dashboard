import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { School } from "../types/types";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class SchoolsService {
  URL = "http://localhost:3000/schools";

  constructor(readonly http: HttpClient) {}

  getAllSchoolsList() {
    return this.http.get<School[]>(this.URL);
  }

  getSchoolById(schoolId: number) {
    return this.http.get<School>(`${this.URL}/${schoolId}`);
  }
}

export const schoolResolver: ResolveFn<School> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(SchoolsService).getSchoolById(+route.paramMap.get("id")!);
};
