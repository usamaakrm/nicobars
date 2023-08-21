import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public searchTerm !: string;
  public totalItem : number = 0

  constructor(private cartService: CartService){}

  ngOnInit(): void{
    this.cartService.getProduct()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }

  search(event:any ){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    
    this.cartService.search.next(this.searchTerm);
}
}
