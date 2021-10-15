/// <reference path="angular.min.js" />
var myModule = angular.module("myModule", []);

var myController = function ($scope) {
    var employee = {
        firstName: 'Arpit',
        gender: 'Male',
        department:'IT'
    };
    $scope.employee = employee;
    $scope.message = "Welcome to the AngularJS";
};

myModule.controller("myController", myController);
