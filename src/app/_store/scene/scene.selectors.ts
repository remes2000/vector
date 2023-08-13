import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FEATURE_MODULE_NAME } from "./_consts";
import { SceneState } from "./_interfaces";

export const sceneSelector = createFeatureSelector<SceneState>(FEATURE_MODULE_NAME);