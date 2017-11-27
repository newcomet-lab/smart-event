// core/myheader.component.ts
import { Component , OnInit , Input } from '@angular/core';

@Component({
    selector: 'hiworkcard',
    templateUrl: './hiworkcard.component.html',
    styleUrls: ['hiworkcard.component.css']
})
export class HiworkcardComponent implements OnInit{

  @Input() contents : String
  @Input() title : String
  @Input() image : String

  constructor() { }

  ngOnInit() {
    console.log("this is : ", this.title);
  }


}