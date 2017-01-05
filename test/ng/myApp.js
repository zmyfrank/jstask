/**
 * Created by Administrator on 2017/1/4.
 */
/*第一步，把ui-router传入angularjs中*/
var myApp = angular.module("myApp", ['ui.router']);
/*下面我们引入$stateProvider和$urlRouterProvider引擎，用于配置路由*/
myApp.config(function ($stateProvider, $urlRouterProvider) {
/*如果没有路由引擎能匹配当前状态，则默认使用ng1页面*/
    $urlRouterProvider.when("", "/ng1");
/*接下来这一个代码块定义了第一个显示出来的状态*/
    $stateProvider
        .state("ng1", {
            url: "/ng1",
            templateUrl: "page2.html"
        })
        /*第二个*/
        .state("ng1.Page3", {
            url:"/Page3",
            templateUrl: "Page3.html"
        })
        /*第三个*/
        .state("ng1.Page4", {
            url:"/Page4",
            templateUrl: "Page4.html"
        })
        /*第四个*/
        .state("ng1.Page5", {
            url:"/Page5",
            templateUrl: "Page5.html"
        });
});