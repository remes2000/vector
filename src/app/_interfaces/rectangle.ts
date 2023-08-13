import { ObjectType } from "../_enums/object-type.enum";

export interface Rectangle {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
  type: ObjectType.RECTANGLE,
}