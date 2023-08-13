import { EditorMode } from "src/app/_enums/editor-mode.enum";
import { SvgObject } from "src/app/_interfaces/svg-object";

export interface EditorState {
  mode: EditorMode,
  selectedObject: SvgObject,
}
