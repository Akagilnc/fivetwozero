/**
 * Created by deronlee on 5/14/16.
 */

import {Component, OnInit} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {IntroductionComponent} from "./introduction.component";
import {FiveTwoZeroComponent} from "./FiveTwoZeroComponent";
import {GameService} from "./services";
import {Content} from "./content.interface";


@Component({
    selector:'app',
    directives:[ROUTER_DIRECTIVES, FiveTwoZeroComponent],
    providers:[GameService],
    template:`
    <div class="container-fluid app-container">
        <div class="row-centered" style="line-height: 200%">
            <div class="col-md-12" style="height: 10%"></div>
            <div class="center">
            <div class="col-md-12">
                <router-outlet></router-outlet>
            </div>
            </div>
        </div>
    </div>

    `

})

@RouteConfig([
    {path: '/', name: 'IntroductionComponent', component: IntroductionComponent},
    {path: '/go', name: 'FiveTwoZero', component: FiveTwoZeroComponent}
])
export class AppComponent implements OnInit{
    private content: Content;

    constructor(private router: Router, private gameService: GameService) {

    }

    ngOnInit() {

    }

}
