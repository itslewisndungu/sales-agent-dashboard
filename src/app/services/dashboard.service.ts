import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DashboardService {
  constructor(readonly http: HttpClient) {
  }

  getMainStatistics() {
    return {
      totalCollectionsMade: 10000000,
      newSchoolsSignedUp: 3500,
      totalRevenueByProduct: 1000000,
      numberOfBouncedCheques: 35
    };
  }

  getSignupTargetStatistics() {
    return {
      analytics: {
        totalSignups: 210,
        target: 400
      },
      timetable: {
        totalSignups: 105,
        target: 400
      },
      finance: {
        totalSignups: 320,
        target: 400
      }
    };
  }

  getSignupDistributionAcrossSchoolTypes() {
    return {
      analytics: {
        primary: 120,
        secondary: 75,
        igcse: 92
      },
      timetable: {
        primary: 85,
        secondary: 110,
        igcse: 78
      },
      finance: {
        primary: 98,
        secondary: 62,
        igcse: 105
      }
    };
  };
}
