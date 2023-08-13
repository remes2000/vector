import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Rectangle } from '../../../../../_interfaces/rectangle';

@Component({
  selector: 'svg:g[app-rectangle]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RectangleComponent {
  @Input({ required: true }) rectangle: Rectangle;
}
