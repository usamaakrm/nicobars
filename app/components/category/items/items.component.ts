import { Component } from '@angular/core';
import * as Aos from 'aos';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {
  public filterCategory: any;
  public searchKey: any;
  public filteredCategory: any;

  constructor(private api: ApiService,private cart: CartService){}

  ngOnInit():void{
    this.api.getProduct()
      .subscribe(res=>{
        this.filterCategory =res;
  
        this.filterCategory.forEach((a:any) => {
            Object.assign(a,{quantity:1,total: a.price})
        });
        console.log(this.filterCategory);

      
      })

      Aos.init()
    window.addEventListener('load',Aos.refresh)

}}
