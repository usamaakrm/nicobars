import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { HomeComponent } from './components/home/home/home.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { ProductComponent } from './components/home/product/product.component';
import { CardsComponent } from './components/home/cart/cards.component';
import { CollectionsComponent } from './components/home/collections/collections.component';
import { ShopComponent } from './components/home/shop/shop.component';
import { CartComponent } from './components/cart/cart/cart.component';
import { FilterPipe } from './pipe/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenupageComponent } from './components/cart/menupage/menupage.component';
import { ApiService } from './services/api.service';
import { NgToastModule } from 'ng-angular-popup';
import { ItemsComponent } from './components/category/items/items.component';
import { WomenComponent } from './components/category/women/women.component';
import { MenComponent } from './components/category/men/men.component';
import { KidsComponent } from './components/category/kids/kids.component';
import { PerfumesComponent } from './components/category/perfumes/perfumes.component';
import { ShoesComponent } from './components/category/shoes/shoes.component';
import { WatchComponent } from './components/category/watch/watch.component';
import { DecorsComponent } from './components/category/decors/decors.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CheckoutComponent } from './components/cart/checkout/checkout.component';
import { StoryComponent } from './components/cart/story/story.component';
import { JewelComponent } from './components/category/jewel/jewel.component';
@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ProductComponent,
    CardsComponent,
    CollectionsComponent,
    ShopComponent,
    CartComponent,
    FilterPipe,
    MenupageComponent,
    ItemsComponent,
    WomenComponent,
    MenComponent,
    KidsComponent,
    PerfumesComponent,
    ShoesComponent,
    WatchComponent,
    DecorsComponent,
    CategoriesComponent,
    CheckoutComponent,
    StoryComponent,
    JewelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule
  ],
  providers: [ CardsComponent , ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
