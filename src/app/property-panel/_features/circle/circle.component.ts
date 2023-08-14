import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Circle } from 'src/app/_interfaces/circle';
import { Store } from '@ngrx/store';
import { PropertyPatch } from 'src/app/_interfaces/property-patch';
import { SceneActions } from 'src/app/_store/scene/scene.actions';
import { NumericPropertyComponent } from '../_shared/numeric-property/numeric-property.component';
import { ColorPropertyComponent } from '../_shared/color-property/color-property.component';

@Component({
  selector: 'app-circle',
  standalone: true,
  imports: [CommonModule, NumericPropertyComponent, ColorPropertyComponent],
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircleComponent {
  @Input({ required: true }) circle: Circle;

  constructor(private readonly store: Store) {}

  patch(patch: PropertyPatch) {
    this.store.dispatch(SceneActions.patchObject({ objectId: this.circle.id, patch }));
  }
}
