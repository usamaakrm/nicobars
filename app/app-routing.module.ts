import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { CartComponent } from './components/cart/cart/cart.component';
import { CardsComponent } from './components/home/cart/cards.component';
import { MenupageComponent } from './components/cart/menupage/menupage.component';
import { ItemsComponent } from './components/category/items/items.component';
import { WomenComponent } from './components/category/women/women.component';
import { MenComponent } from './components/category/men/men.component';
import { KidsComponent } from './components/category/kids/kids.component';
import { DecorsComponent } from './components/category/decors/decors.component';
import { ShoesComponent } from './components/category/shoes/shoes.component';
import { PerfumesComponent } from './components/category/perfumes/perfumes.component';
import { WatchComponent } from './components/category/watch/watch.component';
import {CheckoutComponent} from './components/cart/checkout/checkout.component'
import { StoryComponent } from './components/cart/story/story.component';
import { JewelComponent } from './components/category/jewel/jewel.component';

const routes: Routes = [
  {path : "", redirectTo: "home" ,pathMatch:"full"},
  {path : "home" , component : HomeComponent},
  {path : "cart" , component : CartComponent},
  {path: "cards", component: CardsComponent},
  {path: 'collections/:id', component: MenupageComponent},
  {path: 'new-arrials', component: ItemsComponent},
  {path: 'womens', component: WomenComponent},
  {path: 'mens', component: MenComponent},
  {path: 'kids', component: KidsComponent},
  {path: 'decors', component: DecorsComponent},
  {path: 'shoes', component: ShoesComponent},
  {path: 'perfumes', component: PerfumesComponent},
  {path: 'watch', component: WatchComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'story', component: StoryComponent},
  {path: 'jewel', component: JewelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
