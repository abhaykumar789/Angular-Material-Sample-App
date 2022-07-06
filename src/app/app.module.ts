import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatCardModule,MatDatepickerModule,MatNativeDateModule,
  MatFormFieldModule,  MatProgressBarModule,  MatProgressSpinnerModule,
  MatInputModule, 
  MatDivider,
  MatDividerModule,
  MatIconModule,
  MatButtonModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatcComponent } from './matc/matc.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule} from '@angular/material/menu';
import { ButtonoverviewComponent } from './buttonoverview/buttonoverview.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    MatcComponent,
    ButtonoverviewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,MatSliderModule,MatCardModule,
    MatDatepickerModule,MatNativeDateModule,MatFormFieldModule,  MatProgressBarModule,  MatProgressSpinnerModule
    ,MatInputModule,MatToolbarModule,MatMenuModule,MatDividerModule,MatIconModule,MatButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
