import { Component, OnInit } from '@angular/core';

import { User } from '../../../_models/index';
import { UserService } from '../../../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'vsubmitproposal.component.html',
    styleUrls: ['vsubmitproposal.component.css']
})

export class VsubmitproposalComponent implements OnInit {
    
    model: any= {};

    milestonearr: any[];
    m_descval:any[];

    isOpenfull: boolean;
    paidway: String;
    
    constructor(private userService: UserService) {
        
    }

    ngOnInit() {

        this.isOpenfull = false;
        this.paidway = "bymilestone";

        this.milestonearr = [{id : 1 , description_val : "" , duedate_val : "" , amount_val : ""}];
        
    }

    gotoViewjobpost()
    {
        window.open("vendor/customersjob", "_blank");
    }

    addMilestone()
    {
        var willid;
        if(this.milestonearr.length != 0)
        {
            var temp=0;
            for(var i=0;i<this.milestonearr.length;i++)
                if(temp < this.milestonearr[i].id)
                    temp=this.milestonearr[i].id;

            willid = temp+1;
        }    
        else
            willid = 1;

        this.milestonearr.push({id : willid , description_val : "" , duedate_val : "" , amount_val : ""});
    }

    removeMilestone(msobj)
    {
      for(var i=0;i<this.milestonearr.length;i++)
          if(this.milestonearr[i].id == msobj.id)
              this.milestonearr.splice(i,1);
    }

}