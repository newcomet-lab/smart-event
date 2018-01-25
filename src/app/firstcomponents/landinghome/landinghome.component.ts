import { Component, OnInit, Inject, HostListener  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../../_services/index';

import { DOCUMENT } from "@angular/platform-browser";

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'landinghome.component.html',
    styleUrls: ['landinghome.component.css']
})

export class LandinghomeComponent implements OnInit {

    private LOGO = require("assets/images/testlogo.png");

    navIsFixed: boolean;

    model: any = {};
    loading = false;
    returnUrl: string;

    reviewData: any[] = [{ contents:"ipsum see eww ghwee aawer coka eew werwe ipsum see eww ghwee aawer coka eew werwe ipsum see eww ghwee aawer coka eew werwe" 
                            , rating:"5" , image:"assets/images/review-img.jpg" },
                         { contents:"ipsum see eww ghwee aawer coka eew werwe ipsum see eww ghwee aawer coka eew werwe ipsum see eww ghwee aawer coka eew werwe" 
                            , rating:"4" , image:"assets/images/review-img.jpg" },
                         { contents:"ipsum see eww ghwee aawer coka eew werwe ipsum see eww ghwee aawer coka eew werwe ipsum see eww ghwee aawer coka eew werwe" 
                            , rating:"3" , image:"assets/images/review-img.jpg" }];

    hiworkData: any[] = [{ contents:"ipsum see eww ghwee aawer coka eew werwe ipsum see eww ghwee aawer coka eew werwe ipsum see eww ghwee aawer coka eew werwe" 
                            , title:"title" , image:"assets/images/hiicon1.png" },
                         { contents:"ipsum see eww ghwee aawer coka eew werwe ipsum see eww ghwee aawer coka eew werwe ipsum see eww ghwee aawer coka eew werwe" 
                            , title:"title" , image:"assets/images/hiicon1.png" },
                         { contents:"ipsum see eww ghwee aawer coka eew werwe ipsum see eww ghwee aawer coka eew werwe ipsum see eww ghwee aawer coka eew werwe" 
                            , title:"title" , image:"assets/images/hiicon1.png" },
                         { contents:"ipsum see eww ghwee aawer coka eew werwe ipsum see eww ghwee aawer coka eew werwe ipsum see eww ghwee aawer coka eew werwe" 
                            , title:"title" , image:"assets/images/hiicon1.png" },
                         { contents:"ipsum see eww ghwee aawer coka eew werwe ipsum see eww ghwee aawer coka eew werwe ipsum see eww ghwee aawer coka eew werwe" 
                            , title:"title" , image:"assets/images/hiicon1.png" },
                         { contents:"ipsum see eww ghwee aawer coka eew werwe ipsum see eww ghwee aawer coka eew werwe ipsum see eww ghwee aawer coka eew werwe" 
                            , title:"title" , image:"assets/images/hiicon1.png" }];

    constructor(@Inject(DOCUMENT) private document: Document) { }

    @HostListener("window:scroll", [])
    onWindowScroll() {
        if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
            this.navIsFixed = true;
        } else if (this.navIsFixed && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) { this.navIsFixed = false; } } scrollToTop() { (function smoothscroll() { var currentScroll = document.documentElement.scrollTop || document.body.scrollTop; if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - (currentScroll / 5));
            }
        })();
    }

    ngOnInit() {

    }
    
}
