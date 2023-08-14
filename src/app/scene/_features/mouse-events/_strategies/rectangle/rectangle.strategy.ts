import { Injectable } from "@angular/core";
import { MouseEventStrategy } from "../mouse-event.strategy";
import { Store } from "@ngrx/store";
import { IdGeneratorService } from "src/app/_services/id-generator.service";
import { SceneActions } from "src/app/_store/scene/scene.actions";
import { Rectangle } from "src/app/_interfaces/rectangle";
import { Point } from "src/app/_interfaces/point";
import { RectanglePatch } from './_interfaces';

@Injectable()
// todo cleanup this service
export class RectangleStrategy implements MouseEventStrategy {
  private startPoint: Point = null;

  constructor(
    private readonly store: Store,
    private readonly idGeneratorService: IdGeneratorService,
  ) { }

  handleMouseDown({ offsetX, offsetY }: MouseEvent): void {
    if (this.startPoint) {
      this.createRectangle(this.startPoint, { x: offsetX, y: offsetY });
      this.reset();
      return;
    }
    this.startPoint = { x: offsetX, y: offsetY };
    const newId = this.idGeneratorService.getId();
    this.store.dispatch(SceneActions.startNewObject({ object: Rectangle.create(newId, { x: offsetX, y: offsetY, width: 0, height: 0 }) }));
  }

  handleMouseMove({ offsetX, offsetY }: MouseEvent): void {
    if (!this.startPoint) {
      return;
    }
    const patch = this.getRectangleDetails(this.startPoint, { x: offsetX, y: offsetY });
    this.store.dispatch(SceneActions.patchNewObject({ patch }));
  }

  handleMouseUp({ offsetX, offsetY }: MouseEvent): void {
    if (!this.startPoint) {
      return;
    }
    this.createRectangle(this.startPoint, { x: offsetX, y: offsetY });
    this.reset();
  }

  reset(): void {
    this.startPoint = null;
  }

  private createRectangle(start: Point, end: Point): void {
    const patch = this.preventNoSize(
      this.getRectangleDetails(start, end)
    );
    this.store.dispatch(SceneActions.patchNewObject({ patch }));
    this.store.dispatch(SceneActions.approveNewObject());
  }

  private getRectangleDetails(start: Point, end: Point): RectanglePatch {
    const x = Math.min(start.x, end.x);
    const y = Math.min(start.y, end.y);
    const width = Math.abs(start.x - end.x);
    const height = Math.abs(start.y - end.y);
    return { x, y, width, height };
  }

  private preventNoSize(patch: RectanglePatch): RectanglePatch {
    const isNoSize = patch.width <= 0 || patch.height <= 0;
    return {
      ...patch,
      ...( isNoSize ? { width: 50, height: 100 } : {})
    }
  }
}
