import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FEATURE_MODULE_NAME } from "./_consts";
import { SceneState } from "./_interfaces";
import { SvgObject } from "src/app/_interfaces/svg-object";

const sceneSelector = createFeatureSelector<SceneState>(FEATURE_MODULE_NAME);

export const selectObjects = createSelector([sceneSelector], ({ objects }) => objects);

export const selectNewObject = createSelector([sceneSelector], ({ newObject }) => newObject);

export const selectAllObjects = createSelector(
  [selectObjects, selectNewObject], 
  (objects: SvgObject[], newObject: SvgObject) => {
    return [...(newObject ? [newObject] : []), ...objects];
  }
)

export const selectOverride = createSelector([sceneSelector], ({ override }) => override);