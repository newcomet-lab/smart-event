// core/myheader.component.ts
import { Component , OnInit , Input } from '@angular/core';

@Component({
    selector: 'chartpanel',
    templateUrl: './chartpanel.component.html'
})
export class ChartpanelComponent implements OnInit{

  @Input() title : String
  @Input() money : String
  @Input() percent : String
  @Input() arrow : String
  @Input() day : String
  @Input() pcolor : String
  @Input() arrowflag : Boolean

  constructor() { }

  ngOnInit() {
    console.log("this is : ", this.title);
  }


}