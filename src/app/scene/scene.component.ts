import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectEditorMode } from '../_store/editor/editor.selectors';
import { selectAllObjects, selectOverride } from '../_store/scene/scene.selectors';
import { SvgObject } from '../_interfaces/svg-object';

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
  override$ = this.store.select(selectOverride);
  mode$ = this.store.select(selectEditorMode);
  
  constructor(private readonly store: Store) {}

  trackById(_: number, { id }: SvgObject) {
    return id;
  }
}
