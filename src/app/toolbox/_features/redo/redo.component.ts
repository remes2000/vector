import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-redo',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './redo.component.html',
  styleUrls: ['./redo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RedoComponent {
  faRotateRight = faRotateRight;
}
