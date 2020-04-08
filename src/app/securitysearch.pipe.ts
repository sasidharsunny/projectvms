import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'securitysearch'
})
export class SecuritysearchPipe implements PipeTransform {

  transform(seclog:any[],Search:any ):any
   {
    if(Search==undefined)
    {
      return seclog;
    }
    else
    {
         return  seclog.filter((x)=>x['empid'].toLowerCase().indexOf(Search.toLowerCase())!==-1);
    }

    
  }

}
