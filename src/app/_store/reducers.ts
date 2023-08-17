import { editorReducer } from "./editor/editor.reducer";
import { FEATURE_MODULE_NAME as EDITOR_MODULE_NAME } from "./editor/_consts";
import { FEATURE_MODULE_NAME as SCENE_MODULE_NAME } from "./scene/_consts";
import { FEATURE_MODULE_NAME as HISTORY_MODULE_NAME } from "./history/_consts";
import { sceneReducer } from "./scene/scene.reducer";
import { historyReducer } from "./history/history.reducer";
import { historyMetaReducer } from "./history/history.meta.reducer";

export const REDUCERS = {
  [EDITOR_MODULE_NAME]: editorReducer,
  [SCENE_MODULE_NAME]: sceneReducer,
  [HISTORY_MODULE_NAME]: historyReducer,
}

export const META_REDUCERS = [historyMetaReducer];