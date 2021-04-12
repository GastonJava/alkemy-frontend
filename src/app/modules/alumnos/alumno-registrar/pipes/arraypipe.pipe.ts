/* import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arraypipe'
})
export class ArraypipePipe implements PipeTransform {

  transform(array): any {
    return array.reduce((result, item, index) => (
      index % 2 ? result : [...result, [item, array[index + 1], array[index + 2]]] 
    ), []);
  }

}
 */