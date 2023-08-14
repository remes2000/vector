import { createReducer, on } from "@ngrx/store";
import { SceneState } from "./_interfaces";
import { ObjectType } from "src/app/_enums/object-type.enum";
import { SceneActions } from "./scene.actions";
import { SvgObject } from "src/app/_interfaces/svg-object";

export const initialState: SceneState = {
  objects: [
    {
      id: '1',
      x: 50,
      y: 50,
      radius: 10,
      fill: '#000000',
      type: ObjectType.CIRCLE,
    },
    {
      id: '2',
      x: 40,
      y: 100,
      width: 20,
      height: 50,
      fill: '#000000',
      type: ObjectType.RECTANGLE,
    },
    {
      id: '3',
      x: 50,
      y: 200,
      radius: 10,
      fill: '#000000',
      type: ObjectType.CIRCLE,
    },
  ],
  newObject: null,
}

export const sceneReducer = createReducer(
  initialState,
  on(SceneActions.patchObject, (state, { objectId, patch }) => {
    return {
      ...state,
      objects: state.objects.map((object) => {
        if (object.id !== objectId) {
          return object;
        }
        return { ...object, ...patch } as SvgObject;
      }),
    }
  }),
  on(SceneActions.addObject, (state, { object }) => {
    return {
      ...state,
      objects: [object, ...state.objects]
    }
  }),
  on(SceneActions.startNewObject, (state, { object }) => {
    return {
      ...state,
      newObject: object,
    }
  }),
  on(SceneActions.patchNewObject, (state, { patch }) => {
    return {
      ...state,
      newObject: { ...state.newObject, ...patch } as SvgObject,
    }
  }),
  on(SceneActions.approveNewObject, (state) => {
    return {
      ...state,
      objects: [state.newObject, ...state.objects],
      newObject: null,
    }
  }),
)