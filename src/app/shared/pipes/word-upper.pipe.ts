import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'wordUpper'
})
export class WordUpperPipe implements PipeTransform {

  transform(value: string, wordParts: string[]): string {
    let result: string = value
    wordParts.forEach((item: string): void   => {
      result = result.replace(new RegExp('[А-Яа-я]*' + item.slice(1) + '[а-я]*', 'g'), (match: string) => {
        return match.toUpperCase()
      });
    })
    return result
  }
}
