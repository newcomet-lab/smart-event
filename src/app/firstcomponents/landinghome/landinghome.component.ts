import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'landinghome.component.html',
    styleUrls: ['landinghome.component.css']
})

export class LandinghomeComponent implements OnInit {

    private LOGO = require("assets/images/testlogo.png");

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

    constructor() { }

    ngOnInit() {

    }
    
}
