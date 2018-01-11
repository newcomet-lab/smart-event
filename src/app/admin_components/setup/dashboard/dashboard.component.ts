import { Component, OnInit } from '@angular/core';

import { User } from '../../../_models/index';
import { UserService , ModalService } from '../../../_services/index';
import { Router } from '@angular/router';

import * as mapsData from 'vectormap-data/world.js';
import { Countries, MapService } from '../../../_services/locationmap.service';

@Component({
    moduleId: module.id.toString(),
    providers: [ MapService ],
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit {

	worldMap: any = mapsData.world;
    countries: Countries;

	public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
    };
    public barChartLabels:string[] = ['Ireland', 'UK', 'US', 'China'];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;
     
    public barChartData:any[] = [
      {data: [65, 59, 80, 81], label: 'Status'}
    ];

    constructor(mapservice: MapService , private router: Router , private userService: UserService , private modalService: ModalService) {
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

    public bar_chartClicked(e:any):void {
      console.log(e);
    }
     
    public bar_chartHovered(e:any):void {
      console.log(e);
    }

}