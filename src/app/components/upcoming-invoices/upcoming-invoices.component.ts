import { Component } from "@angular/core";
import { NzTableModule } from "ng-zorro-antd/table";
import { CurrencyPipe, NgForOf } from "@angular/common";
import { NzButtonComponent } from "ng-zorro-antd/button";
import { NzBadgeComponent } from "ng-zorro-antd/badge";
import { NzTagComponent } from "ng-zorro-antd/tag";
import { DatePipe } from "../../pipes/date.pipe";


@Component({
  selector: "app-upcoming-invoices",
  standalone: true,
  imports: [NzTableModule, CurrencyPipe, NzButtonComponent, NgForOf, NzBadgeComponent, NzTagComponent, DatePipe],
  templateUrl: "./upcoming-invoices.component.html",
  styleUrl: "./upcoming-invoices.component.css"
})
export class UpcomingInvoicesComponent {

  // todo: pull data from a service
  upcomingInvoices = [
    {
      schoolName: "St. Mary's Primary School",
      amountDue: 5800,
      dueDate: new Date("2024-05-20"),
      status: "pending"
    },
    {
      schoolName: "Green Hills Academy",
      amountDue: 12500,
      dueDate: new Date("2024-05-28"),
      status: "pending"
    },
    {
      schoolName: "Brookside Secondary School",
      amountDue: 8200,
      dueDate: new Date("2024-06-10"),
      status: "pending"
    },
    {
      schoolName: "Nairobi International School",
      amountDue: 21000,
      dueDate: new Date("2024-06-15"),
      status: "pending"
    },
    {
      schoolName: "Hillcrest Preparatory School",
      amountDue: 18500,
      dueDate: new Date("2024-06-22"),
      status: "pending"
    },
    {
      schoolName: "Braeburn School",
      amountDue: 9800,
      dueDate: new Date("2024-07-05"),
      status: "pending"
    },
    {
      schoolName: "Gems Cambridge International School",
      amountDue: 15600,
      dueDate: new Date("2024-07-12"),
      status: "pending"
    },
    {
      schoolName: "Peponi School",
      amountDue: 11200,
      dueDate: new Date("2024-07-20"),
      status: "pending"
    },
    {
      schoolName: "Banda School",
      amountDue: 7400,
      dueDate: new Date("2024-08-01"),
      status: "pending"
    },
    {
      schoolName: "The Aga Khan Academy",
      amountDue: 23000,
      dueDate: new Date("2024-08-15"),
      status: "pending"
    }
  ];

  collectPayment(invoice: any) {
    // Implement your payment collection logic here
    // todo: Use a modal to enter payment details
    console.log("Collecting payment for:", invoice);
  }
}
