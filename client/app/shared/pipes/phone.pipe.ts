import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
  name: "phone"
})

export class PhonePipe implements PipeTransform {
  transform(value: string): string {
    return value.substr(0, 3) + " " + value.substr(3, 3) + " " + value.substr(6, 3)
  }
}