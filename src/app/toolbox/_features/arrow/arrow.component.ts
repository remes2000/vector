import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowPointer } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { EditorActions, setMode } from 'src/app/_store/editor/editor.actions';
import { selectEditorMode } from 'src/app/_store/editor/editor.selectors';
import { EditorMode } from 'src/app/_enums/editor-mode.enum';

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
  
  active$ = this.store.select(selectEditorMode).pipe(map((mode) => mode === EditorMode.POINTER));
  
  constructor(private readonly store: Store) {}

  click() {
    this.store.dispatch(EditorActions.setMode({ mode: EditorMode.POINTER }));
  }
}
