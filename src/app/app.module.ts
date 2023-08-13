import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToolboxModule } from './toolbox/toolbox.module';
import { SceneModule } from './scene/scene.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { REDUCERS } from './_store/reducers';
import { PropertyPanelModule } from './property-panel/property-panel.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ToolboxModule,
    SceneModule,
    PropertyPanelModule,
    StoreModule.forRoot(REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 100 }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
