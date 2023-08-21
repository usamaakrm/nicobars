import { Component } from '@angular/core';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent {

  collections: Array<any>=[
    {
      img:"../../../../assets/bg/rc1.jpg",
      title:"Nico Core",
      subTitle:"Thoughtful designs we laboured over that are truly emblematic of our brand."
    },
    {
      img:"../../../../assets/bg/rc2.jpg",
      title:"Nico Lounge",
      subTitle:"Effortless style that goes from bedroom to brunch and beyond."
    },
    {
      img:"../../../../assets/bg/rc3.jpg",
      title:"Twilight",
      subTitle:"Silhouettes in lightweight and airy fabrics ideal for the hottest days."
    },
    {
      img:"../../../../assets/bg/rc4.jpg",
      title:"Traveller’s Trunk",
      subTitle:"A print story that is striking yet soulful and fresh."
    },
  ]
}
