System.register(['@angular/core', '@angular/platform-browser', '@angular/platform-browser-dynamic', './routerapp/home.component', './routerapp/about.component', './routerapp/contact.component', './routerapp/list.component', './routerapp/list-detail.component', './routerapp/main.component', './routerapp/app.routetable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, platform_browser_1, platform_browser_dynamic_1, home_component_1, about_component_1, contact_component_1, list_component_1, list_detail_component_1, main_component_1, app_routetable_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (list_component_1_1) {
                list_component_1 = list_component_1_1;
            },
            function (list_detail_component_1_1) {
                list_detail_component_1 = list_detail_component_1_1;
            },
            function (main_component_1_1) {
                main_component_1 = main_component_1_1;
            },
            function (app_routetable_1_1) {
                app_routetable_1 = app_routetable_1_1;
            }],
        execute: function() {
            //  END
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule,
                            app_routetable_1.routing
                        ],
                        declarations: [
                            home_component_1.HomeComponent,
                            about_component_1.AboutComponent,
                            contact_component_1.ContactComponent,
                            list_component_1.ListComponent,
                            list_detail_component_1.ListDetailComponent,
                            main_component_1.MainComponent,
                        ],
                        providers: [],
                        bootstrap: [main_component_1.MainComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
        }
    }
});
