import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'about-page',
     template: `
    <h1>{{Message}} </h1>
    <hr>
    <div class="container">    About Page content!!! </div> 
    
    `,
})
export class AboutComponent implements OnInit {
    Message:string;
    constructor() {
        this.Message = 'This is About Page';
     }

    ngOnInit() { }
}