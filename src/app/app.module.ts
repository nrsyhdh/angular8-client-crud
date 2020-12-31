import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* add these */
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialListComponent } from './components/tutorial-list/tutorial-list.component';
import { TutorialService } from './services/tutorial.service';

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, /* add this */
    HttpClientModule /* add this */
  ],
  providers: [TutorialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
