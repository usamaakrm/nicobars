import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit{
  // property
  searchKey : string = "";
  public productList : any;
  public filterCategory : any;
  public cartService: any;


  constructor(private api: ApiService,
     private toast : NgToastService, 
     private cart: CartService){}
  ngOnInit():void{
    this.api.getProduct()
      .subscribe(res=>{
        this.productList = res;
        this.filterCategory =res;
  
        this.productList.forEach((a:any) => {
            Object.assign(a,{quantity:1,total: a.price})
        });
        console.log(this.productList);
        
      })
      //  search
      this.cart.search.subscribe((val:any)=>{
        this.searchKey = val;
      })
   }
  

  addToCart(item:any){
        this.cart.addToCart(item)
        this.toast.success({detail:"Added to Bag",summary:"confirm your order!",duration:3000})

  }

  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category == ""){
        return a;
      }
    })
 }


  subTitle:string="Our design team embarked on ajourney that began at the awe-inspiring allure of angkor Wat.The detal of this temple complex infuses this collection infuses this collection with grace, and is a call to embrace moments of stillness, every day."
 
  decorItem:Array<any>=[{
    img:"../../../../assets/bg/d1.jpg",
    title:"Dinning"
   },
   {
    img:"../../../../assets/bg/d2.jpg",
    title:"Decor"
   },
   {
    img:"../../../../assets/bg/d3.jpg",
    title:"Bedding & Cushions"
   }
]


}
