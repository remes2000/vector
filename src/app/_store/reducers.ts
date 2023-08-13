import { editorReducer } from "./editor/editor.reducer";
import { FEATURE_MODULE_NAME as EDITOR_MODULE_NAME } from "./editor/_consts";
import { FEATURE_MODULE_NAME as SCENE_MODULE_NAME } from "./scene/_consts";
import { sceneReducer } from "./scene/scene.reducer";

export const REDUCERS = {
  [EDITOR_MODULE_NAME]: editorReducer,
  [SCENE_MODULE_NAME]: sceneReducer,
}