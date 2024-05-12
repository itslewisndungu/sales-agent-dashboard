import { Pipe, PipeTransform } from "@angular/core";
import { format, isDate } from "date-fns";

@Pipe({
  name: "date",
  standalone: true,
  pure: true
})
export class DatePipe implements PipeTransform {
  transform(date: Date | string): string {
    let dateToFormat = date;

    if (typeof date === "string") {
      if (isNaN(new Date(date).getTime())) {
        dateToFormat = date;
      } else {
        dateToFormat = new Date(date);
      }
    }

    if (isDate(dateToFormat)) {
      return format(new Date(dateToFormat), "do MMMM, yyyy");
    } else {
      return date.toString();
    }
  }
}
