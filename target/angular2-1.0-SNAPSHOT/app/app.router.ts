import {Routes, RouterModule} from "@angular/router";
import {HelloComponent} from "./hello/hello.component";
import {HiComponent} from "./hi/hi.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
/**
 * Created by best on 9/9/2559.
 */
const appRoutes:Routes = [
    {path: '', component: HomeComponent},
    {path: 'hello', component: HelloComponent},
    {path: 'hi', component: HiComponent}
]
export const routing = RouterModule.forRoot(appRoutes);

