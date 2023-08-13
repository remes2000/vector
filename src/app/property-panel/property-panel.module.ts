import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyPanelComponent } from './property-panel.component';
import { CircleComponent } from './_features/circle/circle.component';
import { RectangleComponent } from './_features/rectangle/rectangle.component';

@NgModule({
  declarations: [
    PropertyPanelComponent
  ],
  imports: [
    CommonModule,
    CircleComponent,
    RectangleComponent,
  ],
  exports: [
    PropertyPanelComponent,
  ]
})
export class PropertyPanelModule { }
