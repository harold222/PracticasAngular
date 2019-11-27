import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): string {
    if (!images) {
      return 'assets/img/no-image.png'; /* Retorno por defecto para agregar una imagen diferente */
    }

    if (images.length > 0) {
      return images[0].url;
    } else {
      return 'assets/img/no-image.png';
    }
  }

}
