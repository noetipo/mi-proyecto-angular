import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'resaltar',
  standalone: true
})
export class ResaltarPipe implements PipeTransform {

  transform(texto: string, busqueda: string): string {
    if (!busqueda) return texto;

    const regex = new RegExp(busqueda, 'gi');
    return texto.replace(regex, match => `<mark>${match}</mark>`);
  }


}
