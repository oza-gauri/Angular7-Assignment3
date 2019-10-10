import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterComponent } from './register/register.component';
import { GetuserService } from './getuser.service';

const appRoutes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '',   redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutUsComponent,
    ContactUsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
