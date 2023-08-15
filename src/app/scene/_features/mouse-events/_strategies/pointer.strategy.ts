import { Injectable } from "@angular/core";
import { MouseEventStrategy } from "./mouse-event.strategy";
import { Store } from "@ngrx/store";
import { firstValueFrom } from "rxjs";
import { selectDrag, selectSelectedObject } from "src/app/_store/editor/editor.selectors";
import { DragStart } from "src/app/_interfaces/drag-start";
import { Point } from "src/app/_interfaces/point";
import { SceneActions } from "src/app/_store/scene/scene.actions";
import { EditorActions } from "src/app/_store/editor/editor.actions";

@Injectable()
export class PointerStrategy implements MouseEventStrategy {
  constructor(private readonly store: Store) {}

  handleMouseDown(event: MouseEvent): void {}

  handleMouseMove(event: MouseEvent): void {
    void this.handleMouseMoveAsync(event);
  }

  handleMouseUp(event: MouseEvent): void {
    void this.handleMouseUpAsync(event);
  }

  reset(): void {}

  private async handleMouseUpAsync({ offsetX, offsetY }: MouseEvent): Promise<void> {
    const startDrag = await firstValueFrom(this.store.select(selectDrag));
    if (startDrag) {
      await this.patchDraggedObject(startDrag, { x: offsetX, y: offsetY });
      this.store.dispatch(EditorActions.endDrag());
    }
  }

  private async handleMouseMoveAsync({ offsetX, offsetY }: MouseEvent): Promise<void> {
    const startDrag = await firstValueFrom(this.store.select(selectDrag));
    if (startDrag) {
      await this.patchDraggedObject(startDrag, { x: offsetX, y: offsetY });
    }
  }

  private async patchDraggedObject(startDrag: DragStart, currentCursorPosition: Point): Promise<void> {
    const selectedObjectId = await firstValueFrom(this.store.select(selectSelectedObject));
    const newPosition = this.calculateObjectPosition(startDrag, currentCursorPosition);
    this.store.dispatch(SceneActions.patchObject({ objectId: selectedObjectId, patch: { ...newPosition } }));
  }

  private calculateObjectPosition(dragStart: DragStart, currentCursorPosition: Point): Point {
    const xDiff = dragStart.originalPosition.x - dragStart.startCursorPosition.x;
    const yDiff = dragStart.originalPosition.y - dragStart.startCursorPosition.y;
    return {
      x: currentCursorPosition.x + xDiff,
      y: currentCursorPosition.y + yDiff
    };
  }
}
