import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { selectFutureStates } from 'src/app/_store/history/history.selectors';
import { map } from 'rxjs';
import { HistoryActions } from 'src/app/_store/history/history.actions';
import { Store } from '@ngrx/store';

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

  hasFutureStates$ = this.store.select(selectFutureStates)
    .pipe(map((futureStates) => !!futureStates?.length));

  constructor(private readonly store: Store) { }

  redo() {
    this.store.dispatch(HistoryActions.redo());
  }
}
