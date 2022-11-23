import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string | null | undefined, ...args: unknown[]): unknown {
    if (value) {
      const newStr = value.charAt(0).toUpperCase() + value.slice(1);
      return newStr;
    } else {
      return null;
    }
  }
}
