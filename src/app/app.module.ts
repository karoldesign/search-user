import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DetailUserComponent } from './components/detail-user/detail-user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserSearchComponent } from './components/user-search/user-search.component'
import { UserComponent } from './components/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { StringfilterPipe } from './stringfilter.pipe';
import { ListPostComponent } from './components/list-post/list-post.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailUserComponent,
    UserListComponent,
    UserSearchComponent,
    UserComponent,
    StringfilterPipe,
    ListPostComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
