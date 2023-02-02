import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks.component';
import { TasksService } from './tasks-service';
import { FormsModule } from '@angular/forms';
import { Filter } from './filter.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    Filter
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
