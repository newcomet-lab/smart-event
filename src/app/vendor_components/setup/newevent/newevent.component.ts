import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';

import { User } from '../../../_models/index';
import { UserService } from '../../../_services/index';

import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';


@Component({
    moduleId: module.id.toString(),
    templateUrl: 'newevent.component.html',
    styleUrls: ['newevent.component.css']
})

export class NeweventComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    loading = false;

    customStyle = {
        selectButton: {
          "background-color": "yellow",
          "border-radius": "25px",
          "color": "#000"
        },
        clearButton: {
          "background-color": "#FFF",
          "border-radius": "25px",
          "color": "#000",
          "margin-left": "10px"
        },
        layout: {
          "background-color": "purple",
          "border-radius": "25px",
          "color": "#FFF",
          "font-size": "15px",
          "margin": "10px",
          "padding-top": "5px",
          "width": "500px"
        },
        previewPanel: {
          "background-color": "#894489",
          "border-radius": "0 0 25px 25px",
        }
      }

    flag_service_info: boolean;
    flag_general_photo: boolean;
    flag_gallery_photo: boolean;
    flag_video_upload: boolean;
    flag_preview: boolean;
    
    model: any= {};

    @ViewChild('search') public searchElement: ElementRef;
    
    constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private userService: UserService) {
        
    }

    ngOnInit() {

        this.flag_service_info = this.flag_general_photo = this.flag_gallery_photo = this.flag_video_upload = this.flag_preview = true;

        this.model.service_category = "";
        this.model.service_package = "";
        this.model.service_package_category = "";

        this.model.service_overview = "<p>My HTML</p>";

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

        document.getElementById("general_info_tab").click();
    }

    did_general_info()
    {
        console.log("yeah yeah!");
        this.flag_service_info = false;
        document.getElementById("service_info_tab").click();
    }
    did_service_info()
    {
        this.flag_general_photo = false;
        document.getElementById("general_photo_tab").click();
    }
    did_general_photo()
    {
        this.flag_gallery_photo = false;
        document.getElementById("gallery_photo_tab").click();
    }
    did_gallery_photo()
    {
        this.flag_video_upload = false;
        document.getElementById("video_upload_tab").click();
    }
    did_video_gallery()
    {
        this.flag_preview = false;
        //document.getElementById("video_upload_tab").click();
    }
    goPreview()
    {
        //vendor/vendor_event_detail
        window.open("vendor/vendor_event_detail", "_blank");
    }

    /*related with ckeditor*/
    keyupHandlerFunction(evt)
    {
        console.log(evt);
        this.model.service_overview = evt;
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
	        tablinks[i].className = tablinks[i].className.replace(" active", "");
	    }
	    document.getElementById(cityName).style.display = "block";
	    evt.currentTarget.className += " active";
    }

    
}