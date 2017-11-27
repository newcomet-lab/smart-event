// core/myheader.component.ts
import { Component , OnInit , Input } from '@angular/core';

@Component({
    selector: 'livepanel',
    templateUrl: './livepanel.component.html'
})
export class LivepanelComponent implements OnInit{

  selectdata: any[] = [{icolor:"#750504" , title:"Category1" , value:"1" },
                        {icolor:"#053304" , title:"Category2" , value:"2" },
                        {icolor:"#750555" , title:"Category3" , value:"3" },
                        {icolor:"#440504" , title:"Category4" , value:"4" },
                        {icolor:"#750566" , title:"Category5" , value:"5" },
                        {icolor:"#755504" , title:"Category6" , value:"6" },
                        {icolor:"#550504" , title:"Category7" , value:"7" },
                        {icolor:"#050504" , title:"Category8" , value:"8" },
                        {icolor:"#232504" , title:"Category9" , value:"9" },
                        {icolor:"#057704" , title:"Category10" , value:"10" },
                        {icolor:"#088504" , title:"Category11" , value:"11" }];


   live_data: any[] = [{money:"$32", flag:"charge", icolor:"#007504" , title:"company1" , value:"1" , time:"24 min ago" },
                        {money:"$132",flag:"charge",icolor:"#007504" , title:"company2" , value:"2" , time:"4 min ago" },
                        {money:"$302",flag:"re-charge",icolor:"#750504" , title:"company3" , value:"3" , time:"2 hour ago" },
                        {money:"$3",flag:"charge",icolor:"#007504" , title:"company4" , value:"4" , time:"34 min ago" },
                        {money:"$112",flag:"re-fund",icolor:"#750ff4" , title:"company5" , value:"5" , time:"3 min ago" },
                        {money:"$42",flag:"re-charge",icolor:"#750504" , title:"company6" , value:"6" , time:"12 min ago" },
                        {money:"$562",flag:"re-fund",icolor:"#750ff4" , title:"company7" , value:"7" , time:"1 min ago" },
                        {money:"$1102",flag:"charge",icolor:"#007504" , title:"company8" , value:"8" , time:"4 hour ago" },
                        {money:"$312",flag:"fund",icolor:"#7505ff" , title:"company9" , value:"9" , time:"2 min ago" },
                        {money:"$432",flag:"re-charge",icolor:"#750504" , title:"company10" , value:"10" , time:"2 min ago" }];

  constructor() { }

  ngOnInit() {
  }


}