import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSelectedObject } from '../_store/editor/editor.selectors';
import { ObjectType } from '../_enums/object-type.enum';

@Component({
  selector: 'app-property-panel',
  templateUrl: './property-panel.component.html',
  styleUrls: ['./property-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyPanelComponent {
  ObjectType = ObjectType;

  constructor(private readonly store: Store) {}

  selectedObject$ = this.store.select(selectSelectedObject);
}
