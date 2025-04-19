import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'correctServerDescriptionEncoding',
  standalone: true
})
export class CorrectServerDescriptionEncodingPipe implements PipeTransform {
  transform(value: string): any {
    if (value == null) {
      return;
    }

    if (value === ('Friedrich-Alexander-Universit�t Erlangen-N�rnberg')) {
      return 'Friedrich-Alexander-Universität Erlangen-Nürnberg';
    }
    else if (value.startsWith('[irc.belwue.de]')) {
      value = value.replace('\[irc\.belwue\.de\]', '');
    }
    return value;
  }
}
