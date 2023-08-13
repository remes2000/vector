import { createReducer, on } from "@ngrx/store";
import { EditorActions } from "./editor.actions";
import { EditorState } from "./_interfaces";
import { EditorMode } from "src/app/_enums/editor-mode.enum";

export const initialState: EditorState = {
  mode: EditorMode.POINTER,
  selectedObject: null,
};

export const editorReducer = createReducer(
  initialState,
  on(EditorActions.setMode, (state, { mode }) => {
    return { ...state, mode };
  }),
  on(EditorActions.selectObject, (state, { object }) => {
    return { ...state, selectedObject: object };
  }),
)