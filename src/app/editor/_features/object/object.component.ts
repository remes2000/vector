import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgObject } from './_interfaces';
import { RectangleComponent } from './_features/rectangle/rectangle.component';
import { ObjectType } from './_enums';
import { CircleComponent } from './_features/circle/circle.component';

@Component({
  selector: 'svg:g[app-object]',
  standalone: true,
  imports: [CommonModule, RectangleComponent, CircleComponent],
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObjectComponent {
  @Input({ required: true }) object: SvgObject;
  ObjectType = ObjectType;
}
