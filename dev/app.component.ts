import {Component} from 'angular2/core'
import {WeatherListComponent} from "./weather/weather-list.component"
import { WeatherSearchComponent } from "./weather/weather-search.component";
@Component({
    selector: 'my-app',
    template: `<nav class="navbar navbar-toggleable-md navbar-dark bg-primary">
    <div class="container">
        
        <div class="collapse navbar-collapse" id="navbarNav1">
            <h1>Angular Weather App</h1>
        </div>
    </div>
</nav>
<weather-search></weather-search>
<weather-list></weather-list>`,
    directives:[WeatherListComponent,WeatherSearchComponent]
})
export class AppComponent {}