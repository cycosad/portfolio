import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {ProfileComponent} from './profile/profile.component';
import {MatRippleModule} from '@angular/material/core';
import {MenuComponent} from './menu/menu.component';
import {AboutComponent} from './about/about.component';
import {WorkComponent} from './work/work.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ImageViewComponent} from './image-view/image-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    MenuComponent,
    AboutComponent,
    WorkComponent,
    ImageViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatRippleModule,
    MatTabsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    ImageViewComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
