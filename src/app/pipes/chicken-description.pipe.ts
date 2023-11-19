import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'chickenDescription'
})
export class ChickenDescriptionPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/([Кк]ур(?:иц|о|ин)[а-я]+)/g,(match:string)=>{
      return match.toUpperCase()
    }) ;
  }

}
