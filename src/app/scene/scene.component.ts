import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { sceneSelector } from '../_store/scene/scene.selectors';
import { selectEditorMode } from '../_store/editor/editor.selectors';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SceneComponent {
  constructor(private readonly store: Store) {}

  scene$ = this.store.select(sceneSelector);
  mode$ = this.store.select(selectEditorMode);
}
