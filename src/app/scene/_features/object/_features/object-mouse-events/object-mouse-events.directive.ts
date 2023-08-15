import { DestroyRef, Directive, ElementRef, Input, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { fromEvent, withLatestFrom } from 'rxjs';
import { EditorMode } from 'src/app/_enums/editor-mode.enum';
import { Point } from 'src/app/_interfaces/point';
import { SvgObject } from 'src/app/_interfaces/svg-object';
import { EditorActions } from 'src/app/_store/editor/editor.actions';
import { selectEditorMode } from 'src/app/_store/editor/editor.selectors';

@Directive({
  selector: '[appObjectMouseEvents]',
  standalone: true
})
export class ObjectMouseEventsDirective implements OnInit {
  @Input({ required: true }) object: SvgObject;

  constructor(
    private readonly elementRef: ElementRef,
    private readonly destroyRef: DestroyRef,
    private readonly store: Store,
  ) { }

  ngOnInit(): void {
    this.watchMouseEvents();
  }

  private watchMouseEvents(): void {
    fromEvent<MouseEvent>(this.elementRef.nativeElement, 'mousedown')
      .pipe(
        withLatestFrom(this.store.select(selectEditorMode)),
        takeUntilDestroyed(this.destroyRef)
      ).subscribe(([event, mode]) => {
        this.handleMouseDown(event, mode);
      });
  }

  private handleMouseDown({ offsetX, offsetY }: MouseEvent, mode: EditorMode): void {
    if (mode !== EditorMode.POINTER) {
      return;
    }
    this.store.dispatch(EditorActions.selectObject({ objectId: this.object.id }));
    this.store.dispatch(EditorActions.startDrag({
      drag: {
        originalPosition: { x: this.object.x, y: this.object.y },
        startCursorPosition: { x: offsetX, y: offsetY }
      },
    }))
  }
}
