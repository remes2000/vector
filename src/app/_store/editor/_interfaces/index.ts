import { EditorMode } from "src/app/_enums/editor-mode.enum";
import { DragStart } from "src/app/_interfaces/drag-start";

export interface EditorState {
  mode: EditorMode,
  selectedObject: string,
  drag: DragStart,
}
