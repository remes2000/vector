import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Store } from '@ngrx/store';
import { selectPastStates } from 'src/app/_store/history/history.selectors';
import { map } from 'rxjs';
import { HistoryActions } from 'src/app/_store/history/history.actions';

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

  hasPastStates$ = this.store.select(selectPastStates)
    .pipe(map((previousStates) => !!previousStates?.length));

  constructor(private readonly store: Store) {}

  undo() {
    this.store.dispatch(HistoryActions.undo());
  }
}
