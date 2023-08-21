import { Component } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
   ngOnInit():void{
    Aos.init()
    window.addEventListener('load',Aos.refresh)
   }
}
