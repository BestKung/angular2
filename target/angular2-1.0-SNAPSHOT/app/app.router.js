"use strict";
var router_1 = require("@angular/router");
var hello_component_1 = require("./hello/hello.component");
var hi_component_1 = require("./hi/hi.component");
var home_component_1 = require("./home/home.component");
/**
 * Created by best on 9/9/2559.
 */
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'hello', component: hello_component_1.HelloComponent },
    { path: 'hi', component: hi_component_1.HiComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.router.js.map