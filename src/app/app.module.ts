import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {DataTablesModule} from 'angular-datatables';

import {AppComponent} from './app.component';
import {ServerListComponent} from './server-list/server-list.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {IlineLookupComponent} from './iline-lookup/iline-lookup.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ChannelListComponent} from './channel-list/channel-list.component';
import { OrderBySIDPipe } from './iline-lookup/order-by-sid.pipe';
import { CorrectServerDescriptionEncodingPipe } from './correct-server-name-encoding.pipe';
import { RemoveColorsPipe } from './remove-colors.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServerListComponent,
    IlineLookupComponent,
    ChannelListComponent,
    OrderBySIDPipe,
    CorrectServerDescriptionEncodingPipe,
    RemoveColorsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    RouterModule.forRoot([
    { path: 'servers', component: ServerListComponent },
    { path: 'i-line', component: IlineLookupComponent },
    { path: 'channels', component: ChannelListComponent },
    { path: '', component: HomeComponent }
], { relativeLinkResolution: 'legacy' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
