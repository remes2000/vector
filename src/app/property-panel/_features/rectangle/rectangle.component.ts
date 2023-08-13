import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Rectangle } from 'src/app/_interfaces/rectangle';
import { XPositionComponent } from '../_shared/x-position/x-position.component';

@Component({
  selector: 'app-rectangle',
  standalone: true,
  imports: [CommonModule, XPositionComponent],
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RectangleComponent {
  @Input({ required: true }) rectangle: Rectangle;
}
