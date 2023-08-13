import { ObjectType } from "../_enums";

export interface Circle {
  x: number;
  y: number;
  radius: number;
  type: ObjectType.CIRCLE,
}