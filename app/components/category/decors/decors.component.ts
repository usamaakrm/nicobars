import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-decors',
  templateUrl: './decors.component.html',
  styleUrls: ['./decors.component.scss']
})
export class DecorsComponent {
    public  filterCategory: any;
    product:any =[];
    constructor(private api: ApiService, private cart: CartService){}
  
    ngOnInit():void{
      this.api.getProduct()
        .subscribe((res: any)=>{
          this.filterCategory =res.filter((a:any)=>{
            if(a.category == 'decor'){
              return a;
            }
          });
  
          console.log(this.filterCategory);
          
    
          this.filterCategory.forEach((a:any) => {
              Object.assign(a,{quantity:1,total: a.price})
          });
        })
  }}
