import { EditorMode } from "src/app/_enums/editor-mode.enum";

export interface EditorState {
  mode: EditorMode,
  selectedObject: string,
}
