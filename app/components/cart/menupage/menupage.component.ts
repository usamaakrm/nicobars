import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsComponent } from '../../home/cart/cards.component';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.scss']
})
export class MenupageComponent {
  menuData: any;
  getMenuId:any;
  public productList:any;
  myarray: Array<any>=[
    {
      img: "../../../../assets/icons/order.svg",
      title:  "Free delivery",
      subTitle:  "Free shipping on orders above Rs 1,000"
    },
    {
      img: "../../../../assets/icons/return.svg",
      title:  "Easy returns",
      subTitle:  "Return within 15 days of order delivery.",
    },
    {
      img: "../../../../assets/icons/secure.svg",
      title:  "Secure payments",
      subTitle:  "Safer , faster and more secure online payment"
    },
    {
      img: "../../../../assets/icons/cash.svg",
      title:  "Cash on delivery",
      subTitle:  "COD available"
    }
  ]


  constructor(private api: ApiService,
    private param: ActivatedRoute,
    private cart: CartService,
    private toast : NgToastService,
    private service: CardsComponent){}
  ngOnInit(): void{
     this.api.getProduct()
      .subscribe(res=>{
        this.productList = res;

       this.getMenuId = this.param.snapshot.paramMap.get('id')

        if(this.getMenuId){
      
          this.productList.forEach((a:any) => {
            Object.assign(a,{quantity:1,total: a.price})
        });
          this.menuData =  this.productList.filter((id:any)=>{
              return id.id == this.getMenuId;
          });
          console.log(this.menuData);
          
      }
    })

    
  }
  addToCart(menuData:any){
    this.cart.addToCart(menuData)
    this.toast.success({detail:"Added to Bag",summary:"confirm your order!",duration:3000})
}

}
       