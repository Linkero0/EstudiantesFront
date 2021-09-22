import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string| undefined): any {
    if(value!= undefined){
    value =value?.substring(0,4)+"-"+value?.substring(4,6)+"-"+value?.substring(6,8);
    value = formatDate(value,'yyyy/MM/dd','en-US');
  }

    return value;
  }

}
