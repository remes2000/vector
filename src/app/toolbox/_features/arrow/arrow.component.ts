import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowPointer } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-arrow',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArrowComponent {
  faArrowPointer = faArrowPointer;
}
