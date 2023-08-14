import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SceneComponent } from './scene.component';
import { ObjectComponent } from './_features/object/object.component';
import { SceneCursorPipe } from './_pipes/scene-cursor.pipe';
import { MouseEventsDirective } from './_features/mouse-events/mouse-events.directive';

@NgModule({
  declarations: [
    SceneComponent
  ],
  imports: [
    CommonModule,
    ObjectComponent,
    SceneCursorPipe,
    MouseEventsDirective,
  ],
  exports: [
    SceneComponent
  ],
})
export class SceneModule { }
