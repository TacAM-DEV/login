// Define the `phonecatApp` module
var loginApp = angular.module('loginApp', []);

// Define the `loginController` controller on the `loginController` module
loginApp.controller('loginController', function loginController($scope) {
  $scope.config = import("./env.js");

  $scope.SiteName = "TacAM-Login";
});