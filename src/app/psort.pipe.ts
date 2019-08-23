import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'psort',
  pure: false
})
export class PsortPipe implements PipeTransform {

  transform(value: any, args?: any[]): any {
    console.log("hello jyothsna");
    return value.sort();
  }
  

}
