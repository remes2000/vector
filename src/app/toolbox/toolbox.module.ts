import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolboxComponent } from './toolbox.component';
import { RedoComponent } from './_features/redo/redo.component';
import { UndoComponent } from './_features/undo/undo.component';
import { RectangleComponent } from './_features/rectangle/rectangle.component';
import { CircleComponent } from './_features/circle/circle.component';
import { DownloadComponent } from './_features/download/download.component';
import { ArrowComponent } from './_features/arrow/arrow.component';

@NgModule({
  declarations: [
    ToolboxComponent
  ],
  imports: [
    CommonModule,
    RedoComponent,
    UndoComponent,
    RectangleComponent,
    CircleComponent,
    DownloadComponent,
    ArrowComponent,
  ],
  exports: [
    ToolboxComponent,
  ],
})
export class ToolboxModule { }
