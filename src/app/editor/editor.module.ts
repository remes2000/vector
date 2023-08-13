import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { ObjectComponent } from './_features/object/object.component';

@NgModule({
  declarations: [
    EditorComponent
  ],
  imports: [
    CommonModule,
    ObjectComponent,
  ],
  exports: [
    EditorComponent
  ],
})
export class EditorModule { }
