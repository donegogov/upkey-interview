import {Routes} from '@angular/router';
import { MainComponent } from './main/main.component';
import { NewsFeedItemComponent } from './news-feed-item/news-feed-item.component';
import { AccessTokenGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
  { path: '', component: MainComponent, canActivate: [AccessTokenGuard] },
    { path: 'newsfeed', component: NewsFeedItemComponent },
];
