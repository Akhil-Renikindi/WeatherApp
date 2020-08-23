import { ItemEventData } from "tns-core-modules/ui/list-view"
import { Component, OnInit, Input } from "@angular/core";
import { PanelService } from "./panel.service";

@Component({
    selector: "panel",
    moduleId: module.id,
    templateUrl: "./panel.component.html",
    styleUrls: ["./panel.component.css"]
})
export class PanelComponent implements OnInit {


    onItemTap(args: ItemEventData): void {
        console.log('Item with index: ' + args.index + ' tapped');
    }
    textFieldValue: string = "";
    currentWeather: any = <any>{};
    msg: string = "";
    @Input()
    styleBackground :string='';
    display: boolean = false;
    displayWeather: boolean = false;
    currentWeatherText: string = "";
    cityName: string = '';
    climate = "";
    feelsLike = "";
    img = "";

    onButtonTap(): void {
        console.log("Button was pressed " + this.textFieldValue);
        this.displayWeather = true;
        this.display = false;
        this.searchWeather(this.textFieldValue);
    }
    onPanelTap(): void {
        this.display = true;
        this.displayWeather = false;
        this.currentWeatherText = '';
        this.cityName = '';
        this.img='';
    }
    searchWeather(loc: string) {
        this.msg = '';
        this.currentWeather = {};
        this.weatherService.getCurrentWeather(loc)
            .subscribe(res => {
                this.currentWeather = res;
                this.displayWeather = true;
                console.log(this.currentWeather);
                this.currentWeatherText = this.currentWeather.main.temp;
                this.currentWeatherText = this.currentWeatherText ;
                this.cityName = this.textFieldValue;
                this.climate = this.currentWeather.weather[0].main;
                if (this.climate === "Thunderstorm")
                    this.img="~/images/thunderstorm.jpg";
                else if (this.climate === "Drizzle")
                    this.img = "~/images/drizzle.jpg";
                else if (this.climate === "Rain")
                    this.img="~/images/rain.jpg";
                else if (this.climate === "Snow")
                    this.img="~/images/snow.jpg";
                else if (this.climate === "Haze")
                    this.img="~/images/haze.jpg";
                else if (this.climate === "Clear")
                    this.img="~/images/clear.jpg";
                else if (this.climate === "Clouds")
                    this.img="~/images/clouds.jpg";
                else if (this.climate === "Mist")
                    this.img="~/images/mist.jpg";
                else if(this.climate=="Dust")
                    this.img="~/images/dust.jpg";
                else
                    this.img = "";
                this.feelsLike = "Feels Like " + this.currentWeather.main.feels_like ;
                if (this.textFieldValue === "")
                    this.displayWeather = false;
                this.textFieldValue = '';
            }, err => {
                this.display = true;
                this.displayWeather = false;
                this.img = "";
                this.textFieldValue = '';
                if (err.error && err.error.message) {
                    alert(err.error.message);
                    this.msg = err.error.message;
                    console.log(this.msg);
                    return;
                }
                alert('Failed to get weather.');
            }, () => { })
    }

    constructor(private weatherService: PanelService) {
    }

    ngOnInit(): void {
    }
}
