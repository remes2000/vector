import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-x-position',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './x-position.component.html',
  styleUrls: ['./x-position.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class XPositionComponent {
  @Input({ required: true }) value: number;

  constructor(private readonly store: Store) {}

  change(value: number) {
    
  }
}
