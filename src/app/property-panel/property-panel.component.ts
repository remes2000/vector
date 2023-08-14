import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSelectedObject } from '../_store/editor/editor.selectors';
import { ObjectType } from '../_enums/object-type.enum';
import { map, withLatestFrom } from 'rxjs';
import { selectObjects } from '../_store/scene/scene.selectors';

@Component({
  selector: 'app-property-panel',
  templateUrl: './property-panel.component.html',
  styleUrls: ['./property-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyPanelComponent {
  ObjectType = ObjectType;

  constructor(private readonly store: Store) {}

  selectedObject$ = this.store.select(selectSelectedObject).pipe(
    withLatestFrom(this.store.select(selectObjects)),
    map(([selectedObjectId, scene]) => {
      return scene.find((o) => o.id === selectedObjectId);
    })
  );
}
