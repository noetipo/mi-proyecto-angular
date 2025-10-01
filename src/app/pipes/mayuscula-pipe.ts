import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayuscula'
})
export class MayusculaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    // @ts-ignore
    return value.toUpperCase();
  }

}
