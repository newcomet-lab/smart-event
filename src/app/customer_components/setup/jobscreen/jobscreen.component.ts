import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';

import { User } from '../../../_models/index';
import { UserService } from '../../../_services/index';

import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'jobscreen.component.html',
    styleUrls: ['jobscreen.component.css']
})

export class JobscreenComponent implements OnInit {

	ev_category_dropdownList = [];
    ev_category_dropdownSettings = {};

    ev_category_detail_dropdownList = [];
    ev_category_detail_dropdownSettings = {};

	iv_search_model: any= {};
  ived_search_model: any= {};
  ivph_search_model: any={};
  ivsaved_search_model: any={};

  iv_search_flag_add: boolean;
  ived_search_flag_add: boolean;
  ivph_search_flag_add: boolean;

  @ViewChild('search') public searchElement: ElementRef;
  @ViewChild('search1') public searchElement1: ElementRef;
  @ViewChild('search2') public searchElement2: ElementRef;
  @ViewChild('search3') public searchElement3: ElementRef;

    constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private userService: UserService) {

    }

    ngOnInit() {

        this.mapsAPILoader.load().then(
            () => {
                let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, { types:["address"] });

                autocomplete.addListener("place_changed", () => {
                    this.ngZone.run(() => {
                        let place: google.maps.places.PlaceResult = autocomplete.getPlace();

                        if(place.geometry === undefined || place.geometry === null)
                        {
                            return;
                        }
                    });
                });
            }
        );

        this.mapsAPILoader.load().then(
            () => {
                let autocomplete1 = new google.maps.places.Autocomplete(this.searchElement1.nativeElement, { types:["address"] });

                autocomplete1.addListener("place_changed", () => {
                    this.ngZone.run(() => {
                        let place: google.maps.places.PlaceResult = autocomplete1.getPlace();

                        if(place.geometry === undefined || place.geometry === null)
                        {
                            return;
                        }
                    });
                });
            }
        );

        this.mapsAPILoader.load().then(
            () => {
                let autocomplete2 = new google.maps.places.Autocomplete(this.searchElement2.nativeElement, { types:["address"] });

                autocomplete2.addListener("place_changed", () => {
                    this.ngZone.run(() => {
                        let place: google.maps.places.PlaceResult = autocomplete2.getPlace();

                        if(place.geometry === undefined || place.geometry === null)
                        {
                            return;
                        }
                    });
                });
            }
        );

        this.mapsAPILoader.load().then(
            () => {
                let autocomplete3 = new google.maps.places.Autocomplete(this.searchElement3.nativeElement, { types:["address"] });

                autocomplete3.addListener("place_changed", () => {
                    this.ngZone.run(() => {
                        let place: google.maps.places.PlaceResult = autocomplete3.getPlace();

                        if(place.geometry === undefined || place.geometry === null)
                        {
                            return;
                        }
                    });
                });
            }
        );

        document.getElementById("iv").setAttribute('class','tablinks active');
        document.getElementById("invitevendors_content").style.display = "block";

        document.getElementById("invite_defaultclicked").click();
         document.getElementById("reviewproposal_defaultclicked").click();

        this.iv_search_flag_add = false;
        this.ived_search_flag_add = false;
        this.ivph_search_flag_add = false;

        this.ev_category_dropdownList = [
                              {"id":1,"itemName":"Socials"},
                              {"id":2,"itemName":"Corporate"}
                            ];
        this.ev_category_dropdownSettings = { 
                                  singleSelection: false, 
                                  text:"Select Event Category",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"mine_multi"
                                };

        this.ev_category_detail_dropdownList = [
                              {"id":1,"itemName":"Wedding"},
                              {"id":2,"itemName":"Birthday Parties"},
                              {"id":3,"itemName":"Bridal/Baby Showers"},
                              {"id":4,"itemName":"Engagement"},
                              {"id":5,"itemName":"Ceremony"},
                              {"id":6,"itemName":"Coronation"},
                              {"id":7,"itemName":"Sport events"},
                              {"id":8,"itemName":"Appreciation events"},
                              {"id":9,"itemName":"Holiday Parties"},
                              {"id":10,"itemName":"Milestone celebrations"},
                              {"id":11,"itemName":"Team Building"},
                              {"id":12,"itemName":"Business Dinners"}
                            ];
        this.ev_category_detail_dropdownSettings = { 
                                  singleSelection: false, 
                                  text:"Select Event Category Detail",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"mine_multi"
                                };

    }

    onecItemSelect(item:any){
        console.log(item);
        console.log(this.iv_search_model.ecategory_selectedItems);
    }
    OnecItemDeSelect(item:any){
        console.log(item);
        console.log(this.iv_search_model.ecategory_selectedItems);
    }
    onecSelectAll(items: any){
        console.log(items);
    }
    onecDeSelectAll(items: any){
        console.log(items);
    }


    onecdItemSelect(item:any){
        console.log(item);
        console.log(this.iv_search_model.ev_category_detail_selectedItems);
    }
    OnecdItemDeSelect(item:any){
        console.log(item);
        console.log(this.iv_search_model.ev_category_detail_selectedItems);
    }
    onecdSelectAll(items: any){
        console.log(items);
    }
    onecdDeSelectAll(items: any){
        console.log(items);
    }



    openTabPage(evt, cityName)
    {
    	var i, tabcontent, tablinks;
	    tabcontent = document.getElementsByClassName("tabcontent");
	    for (i = 0; i < tabcontent.length; i++) {
	        tabcontent[i].style.display = "none";
	    }
	    tablinks = document.getElementsByClassName("tablinks");
	    for (i = 0; i < tablinks.length; i++) {
	        //tablinks[i].className = tablinks[i].className.replace(" active", "");
	        tablinks[i].setAttribute('class','tablinks');
	    }
	    document.getElementById(cityName).style.display = "block";
	    console.log(evt.currentTarget.getAttribute('class'));
	    evt.currentTarget.setAttribute('class','tablinks active');
	    //evt.currentTarget.addClass('active');
    }

    openTabPagebytext(evt, cityName)
    {
    	var i, tabcontent, tablinks;
	    tabcontent = document.getElementsByClassName("tabcontent");
	    for (i = 0; i < tabcontent.length; i++) {
	        tabcontent[i].style.display = "none";
	    }
	    tablinks = document.getElementsByClassName("tablinks");
	    for (i = 0; i < tablinks.length; i++) {
	        //tablinks[i].className = tablinks[i].className.replace(" active", "");
	        tablinks[i].setAttribute('class','tablinks');
	    }
	    document.getElementById(cityName).style.display = "block";
	    
	    document.getElementById(evt).setAttribute('class','tablinks active');
	    //evt.currentTarget.addClass('active');
    }

    openTabPage_invitevendors(evt, cityName)
    {
    	var i, tabcontent, tablinks;
	    tabcontent = document.getElementsByClassName("invitevendors_tabcontents");
	    for (i = 0; i < tabcontent.length; i++) {
	        tabcontent[i].style.display = "none";
	    }
	    tablinks = document.getElementsByClassName("invitevendors_tablinks");
	    for (i = 0; i < tablinks.length; i++) {
	        tablinks[i].className = tablinks[i].className.replace(" active", "");
	    }
	    document.getElementById(cityName).style.display = "block";
	    evt.currentTarget.className = evt.currentTarget.className.replace("invitevendors_tablinks", "invitevendors_tablinks active");
    }

    openTabPage_reviewproposal(evt, cityName)
    {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("reviewproposal_tabcontents");
      for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("reviewproposal_tablinks");
      for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className = evt.currentTarget.className.replace("reviewproposal_tablinks", "reviewproposal_tablinks active");
    }

    
}