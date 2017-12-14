import { Component, OnInit } from '@angular/core';

import { User } from '../../../_models/index';
import { UserService , ModalService } from '../../../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'setting.component.html',
    styleUrls: ['setting.component.css']
})

export class CustomerSettingComponent implements OnInit {

	  flag_priamryinfo : boolean;
    primary_model: any= {};

    flag_emailinfo: boolean;
    email_model: any= {};

    flag_companyinfo:boolean;
    company_model: any= {};

    flag_addressinfo:boolean;
    address_model: any= {};

    flag_timezoneinfo:boolean;
    timezone_model: any= {};

    flag_phoneinfo:boolean;
    phone_model: any= {};

    flag_vatinfo:boolean;
    vat_model: any= {};

    paymentway: String;

    cardmodel: any= {};

    flag_passwordinfo:boolean;
    password_model: any= {};

    constructor(private userService: UserService , private modalService: ModalService) {

    }

    ngOnInit() {

      document.getElementById("defaultOpen").click();
      
      this.flag_priamryinfo = false;
      this.flag_emailinfo = false;
      this.flag_companyinfo = false;
      this.flag_addressinfo = false;
      this.flag_timezoneinfo = false;
      this.flag_phoneinfo = false;
      this.flag_vatinfo = false;

      this.paymentway = "card";

      this.flag_passwordinfo = false;
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

    save_primaryinfo()
    {
      this.flag_priamryinfo=false;
    }

    save_emailinfo()
    {
      this.flag_emailinfo=false;
    }

    save_companyinfo()
    {
      this.flag_companyinfo=false;
    }

    save_addressinfo()
    {
      this.flag_addressinfo=false;
    }

    save_timezoneinfo()
    {
      this.flag_timezoneinfo=false;
    }

    save_phoneinfo()
    {
      this.flag_phoneinfo=false;
    }

    save_vatinfo()
    {
      this.flag_vatinfo=false;
    }

    openModal(id: string){
        this.modalService.open(id);
    }

    closeModal(id: string){
        this.modalService.close(id);
    }

    doSaveCardPaymentinfo()
    {

    }

    doChangePassword()
    {
      this.flag_passwordinfo = false;
    }
}