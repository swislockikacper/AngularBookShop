import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './components/book/book.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { PagingComponent } from './components/paging/paging.component';
import { StatusComponent } from './components/status/status.component';
import { CartComponent } from './components/cart/cart.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { CartElementComponent } from './components/cart-element/cart-element.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BookComponent,
    BooksListComponent,
    PagingComponent,
    StatusComponent,
    CartComponent,
    NavigationComponent,
    UserDataComponent,
    CartElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
