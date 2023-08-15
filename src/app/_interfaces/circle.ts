import { ObjectType } from "../_enums/object-type.enum";

export interface Circle {
  id: string;
  x: number;
  y: number;
  radius: number;
  fill: string;
  type: ObjectType.CIRCLE,
}

export namespace Circle {
  export function create(id: string, props?: Partial<Circle>): Circle {
    return {
      id,
      x: 0,
      y: 0,
      radius: 20,
      fill: '#000000',
      type: ObjectType.CIRCLE,
      ...(props ?? {})
    };
  }
}