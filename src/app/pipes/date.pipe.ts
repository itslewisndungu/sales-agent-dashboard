import { Pipe, PipeTransform } from "@angular/core";
import { format, isDate } from "date-fns";

@Pipe({
  name: "date",
  standalone: true,
  pure: true
})
export class DatePipe implements PipeTransform {
  transform(date: Date | string): string {
    if (isDate(date)) {
      return format(new Date(date), "do MMMM, yyyy 'at' h:mm aa");
    } else {
      return date.toString();
    }
  }
}
