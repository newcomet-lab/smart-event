import { Component, OnInit } from '@angular/core';

import { User } from '../../../_models/index';
import { UserService } from '../../../_services/index';

import * as mapsData from 'vectormap-data/world.js';
import { Countries, MapService } from '../../../_services/locationmap.service';

@Component({
    moduleId: module.id.toString(),
    providers: [ MapService ],
    templateUrl: 'storefront.component.html',
    styleUrls: ['storefront.component.css']
})

export class StorefrontComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    worldMap: any = mapsData.world;
    countries: Countries;

    public lineChartData:Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
	  ];
	public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
	public lineChartType:string = 'line';


    public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
    };
    public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;
     
    public barChartData:any[] = [
      {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
      {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
    ];
     

    
    constructor(private userService: UserService , mapservice: MapService) {
        this.countries = mapservice.getCountries();
       this.customizeTooltip = this.customizeTooltip.bind(this);
       this.customizeLayers = this.customizeLayers.bind(this);
       this.clickmap = this.clickmap.bind(this);
    }

    ngOnInit() {
        
    }

    customizeTooltip(arg) {
       let name = arg.attribute("name"),
           country = this.countries[name];
       if(country) {
           return {
               text: name + ": " + country.totalArea + "M km&#178",
               color: country.color
           };
       }
   }

   customizeLayers(elements) {
       elements.forEach((element) => {
           let country = this.countries[element.attribute("name")];
           if(country) {
               element.applySettings({
                   color: country.color,
                   hoveredColor: "#e0e000",
                   selectedColor: "#008f00"
               });
           };
       });
   }

   clickmap(e) {
       let target = e.target;
       if(target && this.countries[target.attribute("name")]) {
           target.selected(!target.selected());
       }
   }

    public chartClicked(e:any):void {
	    console.log(e);
	}
	 
	public chartHovered(e:any):void {
	    console.log(e);
	}


    public bar_chartClicked(e:any):void {
      console.log(e);
    }
     
    public bar_chartHovered(e:any):void {
      console.log(e);
    }

    
}