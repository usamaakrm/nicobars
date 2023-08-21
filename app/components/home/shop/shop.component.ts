import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {


pressStr :  Array<any> = [
  {
    img: "../../../../assets/icons/p1.webp",
    title: "“The homegrown brand of Nicobar and its three breezy shops in Mumbai embody a contemporary, keenly Indian approach to lifestyle.”"

  },
  {
    img: "../../../../assets/icons/p2.webp",
    title:"“Created with globetrotters in mind, the travel line is both fashionable and practical and includes bags, clothing, and accessories - from totes to toiletry kits to shoe sacks and scarves.”"
  },
  {
    img: "../../../../assets/icons/p3.webp",
    title: "“For Nicobar, a new-age e-store with modern, India-inspired clothing and accessories, content is key. The brand has an online magazine, Nico Journal”"
  },
  {
    img: "../../../../assets/icons/p4.webp",
    title:"“You get a collaboration that’s all kinds of cool. Indian Ocean, Nicobar’s new home products line, created with Gary Mehigan and his wife, features aboriginal motifs and coral-inspired accessories.”"
  },
  {
    img: "../../../../assets/icons/p5.webp",
    title:"Nicobar is a homegrown label that is known to craft clothes that can transport us elsewhere."
  }
]
}
