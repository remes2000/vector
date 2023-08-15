import { Injectable } from "@angular/core";
import { MouseEventStrategy } from "../mouse-event.strategy";
import { Point } from "src/app/_interfaces/point";
import { Store } from "@ngrx/store";
import { IdGeneratorService } from "src/app/_services/id-generator.service";
import { CirclePatch } from "./_interfaces";
import { Circle } from "src/app/_interfaces/circle";
import { SceneActions } from "src/app/_store/scene/scene.actions";

@Injectable()
export class CircleStrategy implements MouseEventStrategy {
  private startPoint: Point = null;

  constructor(
    private readonly store: Store,
    private readonly idGeneratorService: IdGeneratorService,
  ) { }

  handleMouseDown({ offsetX, offsetY }: MouseEvent): void {
    if (this.startPoint) {
      this.createCircle(this.startPoint, { x: offsetX, y: offsetY });
      this.reset();
      return;
    }
    this.startPoint = { x: offsetX, y: offsetY };
    const newId = this.idGeneratorService.getId();
    this.store.dispatch(SceneActions.startNewObject({ object: Circle.create(newId, { x: offsetX, y: offsetY, radius: 0 }) }));
  }

  handleMouseMove({ offsetX, offsetY }: MouseEvent): void {
    if (!this.startPoint) {
      return;
    }
    const patch = this.getCircleDetails(this.startPoint, { x: offsetX, y: offsetY });
    this.store.dispatch(SceneActions.patchNewObject({ patch }));
  }

  handleMouseUp({ offsetX, offsetY }: MouseEvent): void {
    if (!this.startPoint) {
      return;
    }
    this.createCircle(this.startPoint, { x: offsetX, y: offsetY });
    this.reset();
  }

  reset(): void {
    this.startPoint = null;
  }

  private createCircle(start: Point, end: Point): void {
    const patch = this.preventNoSize(
      this.getCircleDetails(start, end)
    );
    this.store.dispatch(SceneActions.patchNewObject({ patch }));
    this.store.dispatch(SceneActions.approveNewObject());
  }

  private getCircleDetails(start: Point, end: Point): CirclePatch {
    const diamater = Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
    const midpoint = {
      x: (start.x + end.x) / 2,
      y: (start.y + end.y) / 2
    }
    return { x: midpoint.x, y: midpoint.y, radius: diamater / 2 };
  }

  private preventNoSize(patch: CirclePatch): CirclePatch {
    const isNoSize = patch.radius <= 0;
    return {
      ...patch,
      ...(isNoSize ? { radius: 20 } : {})
    }
  }
}