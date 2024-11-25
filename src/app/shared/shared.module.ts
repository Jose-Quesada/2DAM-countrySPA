import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './pages/aboutPage/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedSidebarComponent } from './components/shared-sidebar/shared-sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';




@NgModule({
  declarations: [
    AboutPageComponent,
    HomePageComponent,
    SharedSidebarComponent,
    ContactPageComponent,
    SearchBoxComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HomePageComponent,
    AboutPageComponent,
    SharedSidebarComponent,
    SearchBoxComponent
  ]
})
export class SharedModule { }
