import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { FeaturesComponent } from "./features/features.component";
import {HelpComponent} from "./help/help.component";
import {AboutComponent} from "./about/about.component";

const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    { path: 'blackboard', component: FeaturesComponent },
    { path: 'communities', component: HelpComponent },
    { path: 'about', component: AboutComponent }
    

    
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);