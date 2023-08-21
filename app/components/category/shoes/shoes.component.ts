import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.scss']
})
export class ShoesComponent {
    public  filterCategory: any;
    product:any =[];
    constructor(private api: ApiService, private cart: CartService){}
  
    ngOnInit():void{
      this.api.getProduct()
        .subscribe((res: any)=>{
          this.filterCategory =res.filter((a:any)=>{
            if(a.category == 'shoe'){
              return a;
            }
          });
  
          console.log(this.filterCategory);
          
    
          this.filterCategory.forEach((a:any) => {
              Object.assign(a,{quantity:1,total: a.price})
          });
        })
  }}


