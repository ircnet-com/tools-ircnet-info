import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeColors',
  standalone: true
})
export class RemoveColorsPipe implements PipeTransform {
  transform(text: any): any {
    if (!text || text.length === 0) {
      return text;
    }

    let rcol = 0;
    let bgcol = 0;
    let hidden = false;
    let cleanMessage = '';
    let index = 0;
    let len = text.length;

    while (len > 0) {
      if (rcol > 0
          && (this.isDigit(text.charAt(index))
              || (text.charAt(index) === ',' && this.isDigit(text.charAt(index + 1)) && bgcol === 0))) {
        if (len > index + 1 && text.charAt(index + 1) !== ',') {
          rcol--;
        }

        if (text.charAt(index) === ',') {
          rcol = 2;
          bgcol = 1;
        }
      } else {
        rcol = bgcol = 0;

        const ATTR_COLOR = '\x03';
        const ATTR_BEEP = '\x07';
        const ATTR_RESET = '\x0F';
        const ATTR_REVERSE = '\x16';
        const ATTR_BOLD = '\x02';
        const ATTR_UNDERLINE = '\x1F';
        const ATTR_ITALICS = '\x1D';
        const ATTR_HIDDEN = '\x08';

        switch (text.charAt(index)) {
          case ATTR_COLOR:
            rcol = 2;
            break;
          case ATTR_BEEP:
          case ATTR_RESET:
          case ATTR_REVERSE:
          case ATTR_BOLD:
          case ATTR_UNDERLINE:
          case ATTR_ITALICS:
            break;
          case ATTR_HIDDEN:
            hidden = !hidden;
            break;
          default:
            if (!hidden) {
              cleanMessage += text.charAt(index);
            }
        }
      }

      index++;
      len--;
    }

    return cleanMessage.toString();
  }

  private isDigit(arg: any): boolean {
    return !isNaN(arg);
  }
}
