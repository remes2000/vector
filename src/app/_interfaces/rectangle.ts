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

export namespace Rectangle {
  export function create(id: string, props?: Partial<Rectangle>): Rectangle {
    return {
      id,
      x: 0,
      y: 0,
      width: 50,
      height: 100,
      fill: '#000000',
      type: ObjectType.RECTANGLE,
      ...(props ?? {})
    };
  }
}