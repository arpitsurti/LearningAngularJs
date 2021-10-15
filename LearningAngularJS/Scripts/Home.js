/// <reference path="angular.min.js" />
var myModule = angular.module("myModule", []);

var myController = function ($scope) {
    var employee = {
        firstName: 'Arpit',
        gender: 'Male',
        department: 'IT'
    };

    var employees = [
        { firstName: 'Emp1', gender: 'Male', department: 'IT',salary:55000.56 },
        { firstName: 'Emp2', gender: 'Male', department: 'IT', salary: 65000.77 },
        { firstName: 'Emp3', gender: 'Female', department: 'IT', salary: 85000.06 },
        { firstName: 'Emp4', gender: 'Male', department: 'IT', salary: 55000.56 },
        { firstName: 'Emp5', gender: 'Male', department: 'IT', salary: 65000.77 },
        { firstName: 'Emp6', gender: 'Female', department: 'IT', salary: 85000.06 }
    ];

    var languages = [
        { name: 'English', likes: 0, dislikes: 0 },
        { name: 'Hindi', likes: 0, dislikes: 0 },
        { name: 'Gujarati', likes: 0, dislikes: 0 }
    ]
    $scope.employee = employee;
    $scope.employees = employees;
    $scope.languages = languages;
    $scope.message = "Welcome to the AngularJS";

    $scope.incrementLikes = function (lang) {
        lang.likes++;
    };

    $scope.incrementDislikes = function (lang) {
        lang.dislikes++;
    };

    $scope.rowlimit = 3;
};

myModule.controller("myController", myController);
