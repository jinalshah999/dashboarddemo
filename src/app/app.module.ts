import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import "hammerjs";
import { ChartsModule } from "@progress/kendo-angular-charts";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
