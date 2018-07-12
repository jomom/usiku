import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { BlackboardComponent } from "./blackboard/blackboard.component";
import {HelpComponent} from "./help/help.component";
import {AboutComponent} from "./about/about.component";
import {FooterComponent} from "./footer/footer.component";


const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    { path: 'blackboard', component: BlackboardComponent },
    { path: 'communities', component: HelpComponent },
    { path: 'about', component: AboutComponent },
    { path: 'footer', component: FooterComponent }
    

    
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);