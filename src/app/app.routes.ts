import { Routes } from '@angular/router';
import {ServerListComponent} from "./server-list/server-list.component";
import {IlineLookupComponent} from "./iline-lookup/iline-lookup.component";
import {ChannelListComponent} from "./channel-list/channel-list.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
    { path: 'servers', component: ServerListComponent },
    { path: 'i-line', component: IlineLookupComponent },
    { path: 'channels', component: ChannelListComponent },
    { path: '', component: HomeComponent }
];
