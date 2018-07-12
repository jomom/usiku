import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule, MatCheckboxModule,MatCardModule,MatGridListModule,MatMenuModule,MatIconModule,MatToolbarModule,MatTabsModule,MatExpansionModule} from '@angular/material';
import { CONST_ROUTING } from './app.routing';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { FooterComponent } from './footer/footer.component';
import { BlackboardComponent } from './blackboard/blackboard.component';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    BlackboardComponent,
    HomeComponent,
    HelpComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,FlexLayoutModule,MatCardModule,MatButtonModule, MatCheckboxModule,MatMenuModule,MatToolbarModule,MatTabsModule,MatIconModule,MatGridListModule,CONST_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



