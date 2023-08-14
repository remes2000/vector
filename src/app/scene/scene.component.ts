import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectEditorMode } from '../_store/editor/editor.selectors';
import { selectAllObjects } from '../_store/scene/scene.selectors';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SceneComponent {
  width = 1000;
  height = 500;
  objects$ = this.store.select(selectAllObjects);
  mode$ = this.store.select(selectEditorMode);
  
  constructor(private readonly store: Store) {}

  mouseDown($event: Event): void {
    console.log('mousedown', $event);
  }

  mouseMove($event: MouseEvent): void {
    // console.log('mouse move', $event);
  }

  mouseUp($event: MouseEvent): void {
    console.log('mouseup', $event);
  }
}
