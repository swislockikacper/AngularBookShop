import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './components/book/book.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { StatusComponent } from './components/status/status.component';
import { CartComponent } from './components/cart/cart.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { CartElementComponent } from './components/cart-element/cart-element.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './filters/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooksListComponent,
    StatusComponent,
    CartComponent,
    UserDataComponent,
    CartElementComponent,
    NavigationComponent,
    HomeComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
