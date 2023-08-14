import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-color-property',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './color-property.component.html',
  styleUrls: ['./color-property.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorPropertyComponent {
  @Input({ required: true }) value: string;
  @Input() label = '';
  @Output() valueSet = new EventEmitter<string>();
}
