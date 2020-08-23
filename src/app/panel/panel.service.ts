import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class PanelService {
    constructor(private http: HttpClient) { }
    apiKey: string = "b1d1f71d9101e8180e904a86c7dfc987";

    getCurrentWeather(loc) {

        return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=metric&appid=` + this.apiKey);
    }
}