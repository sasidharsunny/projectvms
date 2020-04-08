import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminsearch'
})
export class AdminsearchPipe implements PipeTransform {

  transform(empdata:any[],SearchTerm:any):any
   {
     if(SearchTerm==undefined)
     {
       return empdata;
     }
     else
     {
          return  empdata.filter((x)=>x['empid'].toLowerCase().indexOf(SearchTerm.toLowerCase())!==-1);
     }
    
  }

}
