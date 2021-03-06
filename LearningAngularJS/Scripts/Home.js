/// <reference path="angular.min.js" />
var myModule = angular.module("myModule", []);

var myController = function ($scope, $http) {
    $http.get('WebService1.asmx/getAllVendors').then(function (response) {
        $scope.vendors = response.data;
    });

    var employee = {
        firstName: 'Arpit',
        gender: 'Male',
        department: 'IT'
    };

    var employees = [
        { firstName: 'Emp1', gender: 'Male', department: 'IT', salary: 55000.56 },
        { firstName: 'Emp2', gender: 'Male', department: 'IT', salary: 45000.77 },
        { firstName: 'Emp3', gender: 'Female', department: 'Accounts', salary: 85000.06 },
        { firstName: 'Emp4', gender: 'Male', department: 'Customer Service', salary: 55000.56 },
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
    $scope.sortColumn = "firstName";
    $scope.reverseOrder = false;

    $scope.sortDate = function (colName) {
        $scope.reverseOrder = (colName == $scope.sortColumn ? !$scope.reverseOrder : false);
        $scope.sortColumn = colName;
    };

    $scope.sortClass = function (colName) {
        if ($scope.sortColumn == colName) {
            return $scope.reverseOrder ? 'arrow-down' : 'arrow-up';
        }
        return '';
    }
};

myModule.controller("myController", myController);
