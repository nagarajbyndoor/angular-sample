import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(pizzas: any, term: any): any {
    // check if search term is undefined
    if(term === undefined) return pizzas;

    // return the updated pizzas array
    return pizzas.filter(function(pizza){ 
      return pizza.name.toLowerCase().includes(term.toLowerCase());
    })
  }

}
