import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByType'
})
export class FilterByTypePipe implements PipeTransform {
  transform(swarm: any[], type: string): any[] {
    return swarm.filter(value => value.type === type);
  }
}
