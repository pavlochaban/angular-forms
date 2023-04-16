import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from '@core/components/side-nav/side-nav.component';
import { HttpClientModule } from '@angular/common/http';

const MATERIAL_IMPORTS = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ...MATERIAL_IMPORTS,
    SideNavComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
