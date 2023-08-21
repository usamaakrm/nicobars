import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  form: any;
  public product : any = [];
  public grandTotal !: number;
  totalItem: any;

  constructor(private cartService : CartService){}

  ngOnInit(): void{
    this.cartService.getProduct()
    .subscribe(res=>{
      this.product = res;
      this.grandTotal = this.cartService.getTotalPrice()
      this.totalItem = res.length;
      
    })
  }


  onSubmit(f:NgForm){
    console.log(f.value);
}

getValue(f: FormControl){
   console.log(f);
}

sucess(){
  alert("Successfully Placed Order!!!")
}
}
