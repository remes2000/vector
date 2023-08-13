import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { EditorActions, setMode } from 'src/app/_store/editor/editor.actions';
import { selectEditorMode } from 'src/app/_store/editor/editor.selectors';
import { EditorMode } from 'src/app/_enums/editor-mode.enum';

@Component({
  selector: 'app-circle',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircleComponent {
  faCircle = faCircle;

  active$ = this.store.select(selectEditorMode).pipe(map((mode) => mode === EditorMode.CIRCLE));

  constructor(private readonly store: Store) {}

  click() {
    this.store.dispatch(EditorActions.setMode({ mode: EditorMode.CIRCLE }));
  }
}
