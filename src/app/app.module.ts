import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainComponent } from './main/main.component';
import { NewsFeedItemComponent } from './news-feed-item/news-feed-item.component';
import { AccessTokenGuard } from './_guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MainComponent,
    NewsFeedItemComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AccessTokenGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
