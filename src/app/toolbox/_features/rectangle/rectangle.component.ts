import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSquareFull } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rectangle',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RectangleComponent {
  faSquareFull = faSquareFull;
}
