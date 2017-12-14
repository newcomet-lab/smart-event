import { Component, OnInit } from '@angular/core';

import { User } from '../../../_models/index';
import { UserService } from '../../../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'makepayment.component.html',
    styleUrls: ['makepayment.component.css']
})

export class MakepaymentComponent implements OnInit {

	paidway: String;

	milestonearr: any[];
    m_descval:any[];
    questionare: any[];

    constructor(private userService: UserService) {

    }

    ngOnInit() {
    	this.paidway = "bymilestone";

        this.milestonearr = [{id : 1 , description_val : "" , amount_val : ""}];

        this.questionare = [{title : "Have you ever support this kinds of service before?" , answerval : ""},
                            {title : "What is your special additional Tip?" , answerval : ""}];
        
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

        this.milestonearr.push({id : willid , description_val : "" , amount_val : ""});
    }

    removeMilestone(msobj)
    {
      for(var i=0;i<this.milestonearr.length;i++)
          if(this.milestonearr[i].id == msobj.id)
              this.milestonearr.splice(i,1);
    }
 
    
}