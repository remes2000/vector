import { ObjectType } from "../_enums";

export interface Rectangle {
  x: number;
  y: number;
  width: number;
  height: number;
  type: ObjectType.RECTANGLE,
}