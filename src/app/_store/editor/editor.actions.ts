import { createAction, createActionGroup, props } from "@ngrx/store";
import { EditorMode } from "src/app/_enums/editor-mode.enum";
import { SvgObject } from "src/app/_interfaces/svg-object";

export const setMode = createAction('set mode', props<{ mode: EditorMode }>())

export const EditorActions = createActionGroup({
  source: 'Editor',
  events: {
    'Set Mode': props<{ mode: EditorMode }>(),
    'Select Object': props<{ object: SvgObject }>(),
  }
})