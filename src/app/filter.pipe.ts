import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], searchText:string): any[] {
    let resultArray:any[]=[];
    if(!searchText) { return value ;}
    if(searchText.length>1){
      return [];
    }
    for(let emp of value){
      if(emp.name.charAt(0).toLowerCase()===searchText.charAt(0).toLowerCase()){
        resultArray.push(emp);
      }
    }
    return resultArray;
  }

}