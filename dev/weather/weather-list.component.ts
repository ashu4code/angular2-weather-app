import {Component,OnInit} from 'angular2/core';
import {WeatherItem} from './weather-item';
import {WeatherItemComponent} from './weather-item.component';
//import{WEATHER_ITEMS} from './weather.data';
import { WeatherService } from "./weather.service";
@Component({
    selector: 'weather-list',
    template: `<section class="weather-list" >
            <weather-item *ngFor="#weatherItem of weatherItems" [item]="weatherItem"></weather-item>
            </section>`,

    directives: [WeatherItemComponent],
    providers:[WeatherService]    
})
export class WeatherListComponent  implements  OnInit   {

weatherItems: WeatherItem[];

constructor(private _weatherService: WeatherService){};


ngOnInit():any{
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
this.weatherItems=this._weatherService.getWeatherItems();
}




}