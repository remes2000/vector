import { Injectable } from "@angular/core";
import { MouseEventStrategy } from "./mouse-event.strategy";
import { Store } from "@ngrx/store";

@Injectable()
export class PointerStrategy implements MouseEventStrategy {
  constructor(private readonly store: Store) {}

  handleMouseDown(event: MouseEvent): void {}
  handleMouseMove(event: MouseEvent): void {}
  handleMouseUp(event: MouseEvent): void {}
  reset(): void {}
}