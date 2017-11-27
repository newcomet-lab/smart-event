import { Component, OnInit } from '@angular/core';

import { User } from '../../../_models/index';
import { UserService } from '../../../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'customer-home.component.html'
})

export class CustomerhomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    
    chartData: any[] = [{title:"Title 1" , money:"$55,55" , arrow:"up" , percent:"0.6%" , day:"25 DAYS AGO" , pcolor:"red" , arrowflag:true},
                        {title:"Title 2" , money:"$15,55" , arrow:"down" , percent:"1.6%" , day:"5 DAYS AGO" , pcolor:"red" , arrowflag:true},
                        {title:"Title 3" , money:"$25,55" , arrow:"up" , percent:"10.6%" , day:"15 DAYS AGO" , pcolor:"green" , arrowflag:false},
                        {title:"Title 4" , money:"$35,55" , arrow:"down" , percent:"22.6%" , day:"2 DAYS AGO" , pcolor:"red" , arrowflag:true},
                        {title:"Title 5" , money:"$45,55" , arrow:"up" , percent:"33.6%" , day:"5 DAYS AGO" , pcolor:"green" , arrowflag:true},
                        {title:"Title 6" , money:"$4,55" , arrow:"up" , percent:"3.6%" , day:"11 DAYS AGO" , pcolor:"green" , arrowflag:false}];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
}