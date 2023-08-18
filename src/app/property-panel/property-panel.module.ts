import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyPanelComponent } from './property-panel.component';
import { CircleComponent } from './_features/circle/circle.component';
import { RectangleComponent } from './_features/rectangle/rectangle.component';
import { ApplyOverridePipe } from '../shared/_pipes/apply-override/apply-override.pipe';

@NgModule({
  declarations: [
    PropertyPanelComponent
  ],
  imports: [
    CommonModule,
    CircleComponent,
    RectangleComponent,
    ApplyOverridePipe,
  ],
  exports: [
    PropertyPanelComponent,
  ]
})
export class PropertyPanelModule { }
