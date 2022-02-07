import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-itemRecommedation',
  host: {'class': 'card mb-5 mb-xl-8'},
  templateUrl: './itemRecommedation.component.html',
})
export class ItemRecommedationComponent implements OnInit {
  RecommendationItems: { ItemName: string; RecItems: string[]; }[];
  constructor() {}
  // RecommendationItems=[{itemName:"",}]
  ngOnInit(): void {
    this.RecommendationItems =[
      {"ItemName":"Item1" , "RecItems":["Item11","Item11","Item11","Item11","Item11"]},
      {"ItemName":"Item2" , "RecItems":["Item21","Item21","Item21","Item21","Item21"]},
      {"ItemName":"Item3" , "RecItems":["Item31","Item11","Item11","Item11","Item11"]},
      {"ItemName":"Item4" , "RecItems":["Item11","Item11","Item11","Item11","Item11"]},
      {"ItemName":"Item3" , "RecItems":["Item31","Item11","Item11","Item11","Item11"]},
      {"ItemName":"Item4" , "RecItems":["Item11","Item11","Item11","Item11","Item11"]},
      {"ItemName":"Item3" , "RecItems":["Item31","Item11","Item11","Item11","Item11"]},
      {"ItemName":"Item4" , "RecItems":["Item11","Item11","Item11","Item11","Item11"]},

    ]
  }
}
