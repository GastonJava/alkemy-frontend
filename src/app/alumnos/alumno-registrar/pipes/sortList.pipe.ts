import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortList'
})
export class SortListPipe implements PipeTransform {

  transform(value: Array<string>, args?: any[]): any {
    const sortField = args[0];
    const sortDireccion = args[1];
    let mult = 1;

    if(sortDireccion === 'desc'){
      mult = -1;
    }

    value.sort((a: any, b: any) => {
      if(a[sortField] < b[sortField]) {
       return -1;
      } else if(a[sortField] > b[sortField]){
        return 1;
      } else {
        return 0;
      }
    }); 
    
    return value;
  }

}
