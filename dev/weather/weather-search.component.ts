import { Component, OnInit } from 'angular2/core';
import{ControlGroup} from 'angular2/common';
import { WeatherService } from "./weather.service";
import { WeatherItem } from "./weather-item";
import { Subject } from "rxjs/Subject";

@Component({
selector:"weather-search",
template:`
<section class="weather-search">
    <form (ngSubmit)="OnSubmit(f)" #f="ngForm">
    <label>city</label>
    <input ngControl="location" type="text" id="city" required (input)="onSearchLocation(input.value)" #input>
     <button type="submit">Add City</button>
<div>
    <span class="info">City found:</span>{{data.name}}
</div>

    </form>

</section>
`,
providers:[WeatherService]
})

export class WeatherSearchComponent implements OnInit{


    private searchStream=new Subject<string>();
    data: any ={};

    constructor(private _weatherService:WeatherService){}
    
    OnSubmit(form: ControlGroup){

    //console.log(form);
    this._weatherService.searchWeatherData(form.value.location)
    .subscribe(
            data=> { 
                const weatherItem= new WeatherItem(data.name,data.weather[0].description,data.main.temp);
                this._weatherService.addWeatherItem(weatherItem);
            });
    }

    onSearchLocation(cityName:  string){
            this.searchStream
            .next(cityName)

    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        
        this.searchStream
            .debounceTime(300)
            .switchMap((input:string)=>this._weatherService.searchWeatherData(input))
            .subscribe(
            data=>this.data=data
             );


        
    }

}
