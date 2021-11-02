/// <reference path="../scripts/angular.min.js" />
var myModule = angular.module("myModule1", ["ngRoute"])
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when("/home", {
                templateURL: "SinglePageApp/home",
                controller: "SingleApp"
            })
            .when("/skills", {
                templateURL: "SinglePageApp/skills",
                controller: "SingleApp"
            })
            .when("/companies", {
                templateURL: "SinglePageApp/companies",
                controller: "SingleApp"
            });
    });

var spacontroller = function ($scope) {
    $scope.message = "Home page";
    
    var skills = [
        { id: '1', name: '.net' },
        { id: '2', name: 'sql' },
        { id: '3', name: 'javascript' },
        { id: '4', name: 'jquery' },
        { id: '5', name: '.net Core' },
        { id: '5', name: 'Angular Js' },
    ];
    $scope.skills = skills;

    var companies = [
        { id: '1', name: 'comp1' },
        { id: '2', name: 'comp2' },
        { id: '3', name: 'comp3' },
        { id: '4', name: 'comp4' },
        { id: '5', name: 'comp5' },
        { id: '5', name: 'comp6' },
    ];
    $scope.companies = companies;
};

myModule.controller("spacontroller", spacontroller);