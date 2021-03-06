import { Pipe, PipeTransform } from '@angular/core';
import { type } from 'aos';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(ukm: any, value?: any): any {

    if (typeof (value) == "undefined" || value == '') return ukm;

    value = value.toLowerCase();

    return ukm.filter(function (item: any) {
      // console.log((item.nama).toLowerCase())
      return JSON.stringify(item.nama).toLowerCase().includes(value);
    });
  }

}
