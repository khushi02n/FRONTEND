import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import{ MatFormFieldModule} from '@angular/material/form-field';
//import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule}from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';






@NgModule({
declarations:[],
exports:[
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatMenuModule,
   MatCheckboxModule

]
})
export class MaterialModule {}
// Example: app.module.ts
