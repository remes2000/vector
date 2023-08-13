import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-undo',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './undo.component.html',
  styleUrls: ['./undo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UndoComponent {
  faRotateLeft = faRotateLeft;
}
