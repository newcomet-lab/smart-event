// core/myheader.component.ts
import { Component , OnInit , Input } from '@angular/core';

@Component({
    selector: 'reviewcard',
    templateUrl: './reviewcard.component.html',
    styleUrls: ['reviewcard.component.css']
})
export class ReviewcardComponent implements OnInit{

  @Input() contents : String
  @Input() rating : Number
  @Input() image : String

  constructor() { }

  ngOnInit() {
    console.log("this is : ", this.rating);
  }


}