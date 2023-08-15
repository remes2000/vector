import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgObject } from '../../../_interfaces/svg-object';
import { RectangleComponent } from './_features/rectangle/rectangle.component';
import { ObjectType } from '../../../_enums/object-type.enum';
import { CircleComponent } from './_features/circle/circle.component';
import { Store } from '@ngrx/store';
import { firstValueFrom } from 'rxjs';
import { selectEditorMode } from 'src/app/_store/editor/editor.selectors';
import { EditorMode } from 'src/app/_enums/editor-mode.enum';
import { ObjectCursorPipe } from './_pipes/object-cursor.pipe';
import { EditorActions } from 'src/app/_store/editor/editor.actions';
import { ObjectMouseEventsDirective } from './_features/object-mouse-events/object-mouse-events.directive';

@Component({
  selector: 'svg:g[app-object]',
  standalone: true,
  imports: [CommonModule, RectangleComponent, CircleComponent, ObjectCursorPipe, ObjectMouseEventsDirective],
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObjectComponent {
  @Input({ required: true }) object: SvgObject;
  ObjectType = ObjectType;

  constructor(private readonly store: Store) { }

  mode$ = this.store.select(selectEditorMode);

  async click(event: MouseEvent) {
    const mode = await firstValueFrom(this.mode$);
    if (mode === EditorMode.POINTER) {
      this.store.dispatch(EditorActions.selectObject({ objectId: this.object.id }));
      event.stopPropagation();
    }
  }
}
