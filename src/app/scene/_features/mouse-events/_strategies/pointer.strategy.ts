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
    const selectedObjectId = await firstValueFrom(this.store.select(selectSelectedObject));
    if (startDrag) {
      this.patchDraggedObject(startDrag, { x: offsetX, y: offsetY }, selectedObjectId);
      this.store.dispatch(EditorActions.endDrag());
      this.store.dispatch(SceneActions.clearOverride());
    }
  }

  private async handleMouseMoveAsync({ offsetX, offsetY }: MouseEvent): Promise<void> {
    const startDrag = await firstValueFrom(this.store.select(selectDrag));
    if (startDrag) {
      this.patchOverride(startDrag, { x: offsetX, y: offsetY });
    }
  }

  private patchDraggedObject(startDrag: DragStart, currentCursorPosition: Point, objectId: string): void {
    const newPosition = this.calculateObjectPosition(startDrag, currentCursorPosition);
    this.store.dispatch(SceneActions.patchObject({ objectId, patch: { ...newPosition }}));
  }

  private patchOverride(startDrag: DragStart, currentCursorPosition: Point): void {
    const newPosition = this.calculateObjectPosition(startDrag, currentCursorPosition);
    this.store.dispatch(SceneActions.patchOverride({ patch: { ...newPosition }}));
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
