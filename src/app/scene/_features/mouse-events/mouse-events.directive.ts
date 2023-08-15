import { DestroyRef, Directive, ElementRef, OnInit } from '@angular/core';
import { PointerStrategy } from './_strategies/pointer.strategy';
import { RectangleStrategy } from './_strategies/rectangle/rectangle.strategy';
import { MouseEventStrategy } from './_strategies/mouse-event.strategy';
import { Store } from '@ngrx/store';
import { selectEditorMode } from 'src/app/_store/editor/editor.selectors';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EditorMode } from 'src/app/_enums/editor-mode.enum';
import { fromEvent } from 'rxjs';
import { CircleStrategy } from './_strategies/circle/circle.strategy';

@Directive({
  selector: '[appMouseEvents]',
  providers: [
    PointerStrategy,
    RectangleStrategy,
    CircleStrategy,
  ],
  standalone: true
})
export class MouseEventsDirective implements OnInit {
  private strategy: MouseEventStrategy;

  constructor(
    private readonly element: ElementRef,
    private readonly destroyRef: DestroyRef,
    private readonly store: Store,
    private readonly pointerStrategy: PointerStrategy,
    private readonly rectangleStrategy: RectangleStrategy,
    private readonly circleStrategy: CircleStrategy,
  ) { }

  ngOnInit(): void {
    this.watchModeChange();
    this.watchMouseEvents();
  }

  private watchModeChange(): void {
    this.store.select(selectEditorMode).pipe((takeUntilDestroyed(this.destroyRef))).subscribe((editorMode) => {
      this.setStrategy(editorMode);
    });
  }

  private setStrategy(mode: EditorMode): void {
    switch (mode) {
      case EditorMode.POINTER:
        this.strategy = this.pointerStrategy;
        break;
      case EditorMode.RECTANGLE:
        this.strategy = this.rectangleStrategy;
        break;
      case EditorMode.CIRCLE:
        this.strategy = this.circleStrategy;
        break;
    }
    this.strategy.reset();
  }

  private watchMouseEvents(): void {
    fromEvent<MouseEvent>(this.element.nativeElement, 'mousedown')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((event: MouseEvent) => {
        this.strategy?.handleMouseDown(event);
      });
    fromEvent<MouseEvent>(this.element.nativeElement, 'mousemove')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((event: MouseEvent) => {
        this.strategy?.handleMouseMove(event);
      });
    fromEvent<MouseEvent>(this.element.nativeElement, 'mouseup')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((event: MouseEvent) => {
        this.strategy?.handleMouseUp(event);
      });
  }
}
