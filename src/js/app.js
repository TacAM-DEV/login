// Define the `phonecatApp` module
var loginApp = angular.module('loginApp', []);

// Define the `loginController` controller on the `loginController` module
loginApp.controller('loginController', function loginController($scope) {

  $scope.SiteName = conf.SiteName;

  $scope.signup = function(){
    console.log("SignUn");
    let Regex = new RegExp(config.signup.PwRegex);

    if(strongRegex.test(password)){
      //Signup Process
    }else{
      //Notify bad Password
    }
  }

  $scope.signin = function(){
    console.log("SignIn");
  }

  $scope.forgotPassword = function(){
    console.log("Forgot Password");
  }
});