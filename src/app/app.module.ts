import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { DragulaModule } from 'ng2-dragula';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';

// Routing Module
import { AppRoutingModule } from './app.routing';

import { FullLayoutComponent } from './layouts/full-layout.component';
import { NgReduxModule } from '@angular-redux/store';
import { ToasterModule, ToasterService } from 'angular2-toaster/angular2-toaster';

import { ModalModule } from 'ng2-bootstrap/modal';
import { HttpModule } from "@angular/http";
import { AutoUpdaterComponent } from './auto-updater/auto-updater.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    TabsModule.forRoot(),
    ChartsModule,
    DragulaModule,
    NgReduxModule,
    ModalModule.forRoot(),
    ToasterModule
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    AutoUpdaterComponent
  ],
  providers: [
    ToasterService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
