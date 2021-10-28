import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string): string {
    const vs = value.split('');
    return `(${vs[0]}${vs[1]}) ${vs[2]}${vs[3]}${vs[4]}${vs[5]} - ${vs[6]}${vs[7]}${vs[8]}${vs[9]}`;
  }

}
