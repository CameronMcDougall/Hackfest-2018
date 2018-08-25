import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'locationFilter'})
export class SearchFilterPipe implements PipeTransform {
  transform(results: string[], searchTerm = '', cities: string[]): string[] {
    let res = [];    
    if(searchTerm == '')return;
    cities.forEach(element => {
      
      if(element.toLowerCase().includes(searchTerm.toLowerCase())){
          res.push(element);
      }
    });

    return res;
  }
}