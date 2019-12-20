import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringfilter'
})
export class StringfilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args) {
      return value.filter(
        p => p.title.toLowerCase().indexOf(args.toLowerCase()) > -1
      );
    }
    return value;
  }

}
