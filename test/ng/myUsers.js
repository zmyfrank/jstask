/**
 * Created by Administrator on 2017/1/4.
 */
/*第一步，把ui-router传入angularjs中*/
var myApp = angular.module("myApp", [&apos;ui.router&apos;]);

myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("", "/PageTab");

    $stateProvider
        .state("PageTab", {
            url: "/PageTab",
            templateUrl: "PageTab.html"
        })
        .state("PageTab.Page1", {
            url:"/Page1",
            templateUrl: "Page-1.html"
        })
        .state("PageTab.Page2", {
            url:"/Page2",
            templateUrl: "Page-2.html"
        })
        .state("PageTab.Page3", {
            url:"/Page3",
            templateUrl: "Page3.html"
        });
});