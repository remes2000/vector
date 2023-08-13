import { Pipe, PipeTransform } from '@angular/core';
import { EditorMode } from 'src/app/_enums/editor-mode.enum';

@Pipe({
  name: 'objectCursor',
  standalone: true
})
export class ObjectCursorPipe implements PipeTransform {
  transform(editorMode: EditorMode): string {
    if (editorMode === EditorMode.POINTER) {
      return 'pointer';
    }
    return 'unset';
  }
}
