import { WeatherHomeComponent } from './weather-home/weather-home.component';
import { PanelComponent } from './panel/panel.component';
import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {HttpClientModule} from "@angular/common/http";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import {NativeScriptUIDataFormModule} from "nativescript-ui-dataform/angular";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        HttpClientModule,
        NativeScriptUIDataFormModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AppComponent,
        PanelComponent,
        WeatherHomeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
