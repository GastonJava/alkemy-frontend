/* import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrar'
})
export class FiltrarPipe implements PipeTransform {

  transform(value: any[], filtrarString: string, nomMateria: string): any {
    
    const array = [];
    if(value.length === 0 || filtrarString === '' || nomMateria === ''){
      return value;
    }

    for(const i of value){
      if(i[nomMateria] === filtrarString){
        array.push(i);
      }
    }
    
    
    return array;
  }

}
 */