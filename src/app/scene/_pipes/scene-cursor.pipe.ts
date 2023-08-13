import { Pipe, PipeTransform } from '@angular/core';
import { EditorMode } from 'src/app/_enums/editor-mode.enum';

const NEW_ELEMENT_MODES = [
  EditorMode.CIRCLE,
  EditorMode.RECTANGLE
]

@Pipe({
  name: 'sceneCursor',
  standalone: true
})
export class SceneCursorPipe implements PipeTransform {
  transform(mode: EditorMode): string {
    return NEW_ELEMENT_MODES.includes(mode) ? 'crosshair' : 'unset';
  }
}
