import { Component, OnDestroy, OnInit } from "@angular/core";
import { CollectionsService } from "../../services/collections.service";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzTagModule } from "ng-zorro-antd/tag";
import { CurrencyPipe, NgForOf } from "@angular/common";
import { DatePipe } from "../../pipes/date.pipe";
import { NzButtonComponent } from "ng-zorro-antd/button";
import { NzIconDirective } from "ng-zorro-antd/icon";
import { ActivatedRoute } from "@angular/router";
import { Collection } from "../../types/types";
import { Subscription, switchMap } from "rxjs";
import { UpdateCollectionStatusComponent } from "../../components/update-collection-status/update-collection-status.component";
import { NzModalModule, NzModalService } from "ng-zorro-antd/modal";
import { CollectionsListComponent } from "../../components/collections-list/collections-list.component";

@Component({
  selector: "app-school-collections",
  standalone: true,
  imports: [
    NzTableModule,
    NzTagModule,
    CurrencyPipe,
    NgForOf,
    DatePipe,
    NzButtonComponent,
    NzIconDirective,
    UpdateCollectionStatusComponent,
    NzModalModule,
    CollectionsListComponent,
  ],
  templateUrl: "./school-collections.component.html",
  styleUrl: "./school-collections.component.css",
})
export class SchoolCollectionsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  fetchingCollections = false;
  collections: Collection[] = [];

  updatingCollectionState:
    | {
        isUpdating: false;
      }
    | {
        isUpdating: true;
        selectedCollection: Collection;
      } = {
    isUpdating: false,
  };

  constructor(
    readonly route: ActivatedRoute,
    readonly collectionsService: CollectionsService,
    readonly modalService: NzModalService,
  ) {}

  ngOnInit() {
    const fetchCollectionsSubscription = this.route
      .parent!.params.pipe(
        switchMap((params) => {
          this.fetchingCollections = true;
          return this.collectionsService.getSchoolCollections(+params["id"]);
        }),
      )
      .subscribe({
        next: (collections) => {
          this.collections = collections;
          this.fetchingCollections = false;
        },
      });

    this.subscriptions.push(fetchCollectionsSubscription);
  }

  refetchCollections() {
    // Extract school ID from route params
    const schoolId = +this.route.parent!.snapshot.params["id"];
    this.fetchingCollections = true; // Start loading
    this.collectionsService.getSchoolCollections(schoolId).subscribe({
      next: (collections) => {
        this.collections = collections;
        this.fetchingCollections = false;
      },
    });
  }

  closeUpdateCollectionStatusModal() {
    this.updatingCollectionState = {
      isUpdating: false,
    };
  }

  updateCollectionStatus(collection: Collection) {
    this.updatingCollectionState = {
      isUpdating: true,
      selectedCollection: collection,
    };
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
