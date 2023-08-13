import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Circle } from 'src/app/_interfaces/circle';

@Component({
  selector: 'app-circle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircleComponent {
  @Input({ required: true }) circle: Circle;
}
