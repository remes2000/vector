import { Point } from "./point";

export interface DragStart {
  originalPosition: Point;
  startCursorPosition: Point;
}
