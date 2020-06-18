import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '@app/_models';
import { AccountService } from '@app/_services';
import { CovidService } from '@app/_services/covid.service';
import { Covid } from '@app/_models/covid';
import * as CanvasJS from './canvasjs.min.js';

@Component(
    { templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
    currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];
    covidCases: Covid[] = [];
    totalNOOfCases = 0;

    constructor(
        private accountService: AccountService,
        private router: Router,
        private covidService: CovidService
    ) {
        this.currentUser = this.accountService.userValue;
    }

    ngOnInit() {
       // this.loadAllUsers();
        this.loadCovidData();
        this.loadChart();
    }

    loadChart(){
        let chart = new CanvasJS.Chart("chartContainer", {
            theme: "light2",
            animationEnabled: true,
            exportEnabled: true,
            title: {
                text: "Monthly Expense"
            },
            data: [{
                type: "doughnut",
                showInLegend: true,
                toolTipContent: "<b>{name}</b>:${y} (#percent%)",
                indexLabel: "{name} - #percent%",
                dataPoints: [
                    {y: 450, name: "Food"},
                    {y: 120, name: "Insurance"},
                    {y: 300, name: "Traveling"},
                    {y: 800, name: "Housing"},
                    {y: 150, name: "Education"}
                ]
            }]
        });
        chart.render();
    }

    loadCovidData() {
        console.log('calling covid service!');
        this.covidService.getAll(response => {
            console.log('covid response:', response);
            if(response){
                this.covidCases = response;
                response.forEach(ele =>{
                    console.log('no of cases :', ele.noOfCases);
                    this.totalNOOfCases += ele.noOfCases; 
                });
            }
        })
    }

    // ngOnDestroy() {
    //     this.currentUserSubscription.unsubscribe();
    // }

    // deleteUser(id: number) {
    //     this.userService.delete(id).pipe(first()).subscribe(() => {
    //         this.loadAllUsers()
    //     });
    // }

    // private loadAllUsers() {
    //     this.userService.getAll().pipe(first()).subscribe(users => {
    //         this.users = users;
    //     });
    // }

    logout() {
        this.accountService.logout();
    }
}