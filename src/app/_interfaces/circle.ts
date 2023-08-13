import { ObjectType } from "../_enums/object-type.enum";

export interface Circle {
  id: string;
  x: number;
  y: number;
  radius: number;
  type: ObjectType.CIRCLE,
}