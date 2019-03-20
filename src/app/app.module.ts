import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { ControlButtonComponent } from './control-button/control-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    VideoPlayerComponent,
    ControlButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
