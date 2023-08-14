import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-numeric-property',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './numeric-property.component.html',
  styleUrls: ['./numeric-property.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumericPropertyComponent {
  @Input({ required: true }) value: number;
  @Input() label = '';
  @Output() valueSet = new EventEmitter<number>();
}
