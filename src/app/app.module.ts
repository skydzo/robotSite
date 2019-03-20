import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { NgxBootstrapSliderModule } from 'ngx-bootstrap-slider';
import {NgxToggleModule} from "ngx-toggle";



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { ControlButtonComponent } from './control-button/control-button.component';
import {MoveService} from './_services/move.service';

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
    VgBufferingModule,
    NgxBootstrapSliderModule,
    NgxToggleModule,
    HttpClientModule

  ],
  providers: [
    MoveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
