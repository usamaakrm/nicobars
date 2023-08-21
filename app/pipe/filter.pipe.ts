import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, propName:string):any{
    const result: any=[];
    //  conditons
    if(! value || filterString ==="" || propName ===""){
      return value;
    }
    value.forEach((a:any)=>{
      //  this is for filtering
      if(a[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
        // it will try to insert in the result
         result.push(a);
      }
    })
    return result;
  }

}
