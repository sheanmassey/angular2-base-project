import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'

import {AppComponent} from './component'
import {HomeComponent} from '../home.component'


// import * as d3 from 'd3'
// import 'c3'
// var c = c3.generate({data: {}});
//c.data;
// var d = d3.ascending(21, 2);

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {
                path: 'home',
                component: HomeComponent,
            },
            {
                path: '**',
                redirectTo: '/home',
            },
        ]),
    ],
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule {
    
}

