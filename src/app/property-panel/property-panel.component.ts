import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSelectedObject } from '../_store/editor/editor.selectors';
import { ObjectType } from '../_enums/object-type.enum';
import { combineLatest, map, withLatestFrom } from 'rxjs';
import { selectObjects, selectOverride } from '../_store/scene/scene.selectors';

@Component({
  selector: 'app-property-panel',
  templateUrl: './property-panel.component.html',
  styleUrls: ['./property-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyPanelComponent {
  ObjectType = ObjectType;

  constructor(private readonly store: Store) {}

  selectedObject$ = combineLatest([
    this.store.select(selectSelectedObject),
    this.store.select(selectObjects)
  ]).pipe((map(([selectedObjectId, objects]) => {
    return objects.find((o) => o.id === selectedObjectId);
  })));

  override$ = this.store.select(selectOverride);
}
