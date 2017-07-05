import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home-page',
    template: `
    <h1>{{Message}} </h1>
    <hr>
    <div class="container">    Home Page content!!! </div> 
    
    `
})
export class HomeComponent implements OnInit {
    Message:string;
    constructor() {
        this.Message = 'This is Home Page';
     }

    ngOnInit() { }
}