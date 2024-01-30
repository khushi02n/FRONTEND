import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { LogInComponent } from './log-in/log-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthServiceService } from './auth-service.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LogOutComponent } from './log-out/log-out.component';
//import { DashboardComponentModule } from './dashboard/dashboard.component.module';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatDialogModule} from '@angular/material/dialog';
import { AddClientPopupComponent } from './add-client-popup/add-client-popup.component'
import {MatButtonModule} from '@angular/material/button';
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';
import{ MatFormFieldModule} from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
//import { SearchPipe } from './search.pipe';
import {DataTablesModule} from 'angular-datatables';
 import { Ng2SearchPipeModule } from 'ng2-search-filter';
 import { NgChartsModule } from 'ng2-charts';
//import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CarouselModule } from 'ngx-owl-carousel-o';

 



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LogInComponent,
    DashboardComponent,
    CreateAccountComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    LogOutComponent,
    AddClientPopupComponent,
    //MyLineChartComponent,
  //  SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatBadgeModule,
    MatSidenavModule,  MatListModule,
    MatIconModule,
    MatSelectModule,
    MatMenuModule,
    DataTablesModule,
    NgChartsModule,NgxSpinnerModule,
    CarouselModule
    
    //Ng2SearchPipeModule
 

  
   
   // DashboardComponentModule
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
