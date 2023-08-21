import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent {
array :Array<any>=[
   {
      img: "../../../../assets/icons/b1.png",
      title: "Original Products",
      description:"We provide money back guarantee if the product are not original"
   },
   {
      img: "../../../../assets/icons/b2.png",
      title: "Satisfaction Guarantee",
      description:"Exchange the product you've purchased if it does'nt fit on you"
   },
   {
      img: "../../../../assets/icons/b3.png",
      title: "New Arrivals Everyday",
      description:"We updates our collection almost everyday"
   },
   {
      img: "../../../../assets/icons/b4.png",
      title: "Fast & Free Shipping",
      description:"We offer fast and free shipping for our loyal customers"
   },
]
}