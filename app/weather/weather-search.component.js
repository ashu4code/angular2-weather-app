System.register(['angular2/core', "./weather.service", "./weather-item", "rxjs/Subject"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, weather_service_1, weather_item_1, Subject_1;
    var WeatherSearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            },
            function (weather_item_1_1) {
                weather_item_1 = weather_item_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            WeatherSearchComponent = (function () {
                function WeatherSearchComponent(_weatherService) {
                    this._weatherService = _weatherService;
                    this.searchStream = new Subject_1.Subject();
                    this.data = {};
                }
                WeatherSearchComponent.prototype.OnSubmit = function (form) {
                    var _this = this;
                    //console.log(form);
                    this._weatherService.searchWeatherData(form.value.location)
                        .subscribe(function (data) {
                        var weatherItem = new weather_item_1.WeatherItem(data.name, data.weather[0].description, data.main.temp);
                        _this._weatherService.addWeatherItem(weatherItem);
                    });
                };
                WeatherSearchComponent.prototype.onSearchLocation = function (cityName) {
                    this.searchStream
                        .next(cityName);
                };
                WeatherSearchComponent.prototype.ngOnInit = function () {
                    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
                    //Add 'implements OnInit' to the class.
                    var _this = this;
                    this.searchStream
                        .debounceTime(300)
                        .switchMap(function (input) { return _this._weatherService.searchWeatherData(input); })
                        .subscribe(function (data) { return _this.data = data; });
                };
                WeatherSearchComponent = __decorate([
                    core_1.Component({
                        selector: "weather-search",
                        template: "\n<section class=\"weather-search\">\n    <form (ngSubmit)=\"OnSubmit(f)\" #f=\"ngForm\">\n    <label>city</label>\n    <input ngControl=\"location\" type=\"text\" id=\"city\" required (input)=\"onSearchLocation(input.value)\" #input>\n     <button type=\"submit\">Add City</button>\n<div>\n    <span class=\"info\">City found:</span>{{data.name}}\n</div>\n\n    </form>\n\n</section>\n",
                        providers: [weather_service_1.WeatherService]
                    }), 
                    __metadata('design:paramtypes', [weather_service_1.WeatherService])
                ], WeatherSearchComponent);
                return WeatherSearchComponent;
            }());
            exports_1("WeatherSearchComponent", WeatherSearchComponent);
        }
    }
});
//# sourceMappingURL=weather-search.component.js.map