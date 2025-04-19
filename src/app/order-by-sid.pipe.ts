import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBySID',
  standalone: true
})
export class OrderBySIDPipe implements PipeTransform {
  transform(items: any[]): any {
    return items.sort((a, b) => {
      if (a.sid.startsWith('0PN') && b.sid.startsWith('0PN')) {
        return a.sid.localeCompare(b.sid);
      }
      else if (a.sid.startsWith('0PN')) {
        return 1;
      }
      else if (b.sid.startsWith('0PN')) {
        return -1;
      }
      else {
        return a.sid.localeCompare(b.sid);
      }
    });
  }
}
