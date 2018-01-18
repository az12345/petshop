import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import {PetComponent} from './pet/pet.component';
import {PetListComponent} from './pet/pet-list.component';
import {AppPetService} from './shared/pet.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    PetListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ToastrModule.forRoot()
  ],
  providers: [AppPetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
