import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Rectangle } from 'src/app/_interfaces/rectangle';
import { Store } from '@ngrx/store';
import { SceneActions } from 'src/app/_store/scene/scene.actions';
import { PropertyPatch } from 'src/app/_interfaces/property-patch';
import { NumericPropertyComponent } from '../_shared/numeric-property/numeric-property.component';
import { ColorPropertyComponent } from '../_shared/color-property/color-property.component';


@Component({
  selector: 'app-rectangle',
  standalone: true,
  imports: [CommonModule, NumericPropertyComponent, ColorPropertyComponent],
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RectangleComponent {
  @Input({ required: true }) rectangle: Rectangle;

  constructor(private readonly store: Store) {}

  patch(patch: PropertyPatch) {
    this.store.dispatch(SceneActions.patchObject({ objectId: this.rectangle.id, patch }));
  }
}
