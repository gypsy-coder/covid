import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '@app/_models';
import { AccountService } from '@app/_services';
import { CovidService } from '@app/_services/covid.service';
import { Covid } from '@app/_models/covid';
import * as CanvasJS from './canvasjs.min.js';
import { NONE_TYPE } from '@angular/compiler';

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
    totalNoOfDeaths = 0;
    totalNoOfRecovery = 0;
    fatalityRate = 0;
    datapoints: any[] = [];
    statesChartData: any[] = [];
    backgroundColor = ["#ec9da7", "#f9e39f", "#ace5b9"];
    
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
    }

    loadBarChart(canvasName, datapoints){
        console.log("canvasName", canvasName, "datapoints::", datapoints);
        var chart = new CanvasJS.Chart(canvasName, {
            animationEnabled: true,
            
            title:{
                text:"State wise Covid-19 cases : Top 5"
            },
            axisX:{
                interval: 1
            },
            axisY2:{
                interlacedColor: "rgba(1,77,101,.2)",
                gridColor: "rgba(1,77,101,.1)",
                title: "Number of cases"
            },
            data: [{
                type: "column",
                name: "states",
                axisYType: "secondary",
                color: "#014D65",
                dataPoints: datapoints
            }]
        });
        chart.render();
    }

    loadChart(canvasName, datapoints , sum){
        console.log("canvasName", canvasName, "datapoints::", datapoints, "sum", sum);
        CanvasJS.addColorSet("customColorSet", this.backgroundColor);
        var chart = new CanvasJS.Chart(canvasName, {
            animationEnabled: true,
            title:{
                text: sum,
                verticalAlign: "center",
                dockInsidePlotArea: true
            },
            data: [{
                type: "doughnut",
                startAngle: 60,
                //innerRadius: 60,
                indexLabel: null,
                //indexLabelFontSize: 17,
                //indexLabel: "{label} - #percent%",
                toolTipContent: "<b>{label}:</b> {y} (#percent%)",
                dataPoints: datapoints
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
                this.datapoints = [];
                let datapointsCured = [];
                let datapointDeaths = [];
                response.sort((a,b) => a.noOfCases > b.noOfCases ? 1 : -1);
                response.forEach(ele =>{
                    this.totalNOOfCases += ele.noOfCases; 
                    this.totalNoOfRecovery += ele.cured;
                    this.totalNoOfDeaths += ele.deaths;
                    let datapoint = { y: ele.noOfCases, label: ele.state};
                    this.datapoints.push(datapoint);
                    let datapointCured = { y: ele.cured, label: ele.state};
                    datapointsCured.push(datapointCured);
                    let datapointDeath = { y: ele.deaths, label: ele.state};
                    datapointDeaths.push(datapointDeath);
                });
                this.fatalityRate = Math.round((this.totalNoOfDeaths/this.totalNOOfCases)*10000)/100;
                this.statesChartData = this.datapoints.slice(-5);
                this.loadBarChart("barChartContainer", this.statesChartData);
                this.loadChart("chartContainer", this.datapoints ,this.totalNOOfCases);
                this.loadChart("chartContainerCured", datapointsCured ,this.totalNoOfRecovery);
                this.loadChart("chartContainerDeaths", datapointDeaths ,this.totalNoOfDeaths);
            }
        })
    }
    
    OnStateHover(stateName){
        let data = {y:this.covidCases.filter(ele => ele.state == stateName)[0].noOfCases, label: stateName};
        if(!this.statesChartData.some( ele => ele.label == stateName))
        this.statesChartData.push(data);
        //this.statesChartData = this.statesChartData.slice(-6);
        this.loadBarChart("barChartContainer", this.statesChartData);
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