import { Pipe, PipeTransform } from '@angular/core';
import { SvgObject } from 'src/app/_interfaces/svg-object';

@Pipe({
  name: 'applyOverride',
  standalone: true
})
export class ApplyOverridePipe implements PipeTransform {
  transform(object: SvgObject, override?: { id: string } & Partial<SvgObject>): SvgObject {
    if (override && object.id === override.id) {
      return { ...object, ...override } as SvgObject;
    }
    return object;
  }
}
