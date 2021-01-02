import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectedElement'
})
export class SelectedElementPipe implements PipeTransform {

  transform(carousels: any[], index: number): any[] {
    return carousels.filter((carousel: any, _index: number) => index == _index)
  }

}
