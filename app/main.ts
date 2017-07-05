import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
// START
import {HomeComponent} from './routerapp/home.component';
import {AboutComponent} from './routerapp/about.component';
import {ContactComponent} from './routerapp/contact.component';
import {ListComponent}  from './routerapp/list.component';
import {ListDetailComponent} from './routerapp/list-detail.component';
import {MainComponent} from './routerapp/main.component';
import {routing} from './routerapp/app.routetable';
//  END


@NgModule({
    imports: [BrowserModule,
    routing 
    ], //
        
    declarations: [   
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ListComponent,
    ListDetailComponent,
    MainComponent,

    ],
    providers:[

        ],    
    bootstrap:[MainComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);