// Define the `phonecatApp` module
var loginApp = angular.module('loginApp', []);

// Define the `loginController` controller on the `loginController` module
loginApp.controller('loginController', ['$scope', '$http', function loginController($scope, $http) {

  $scope.SiteName = conf.SiteName;

  $scope.signup = function(){
    console.log("SignUn");
    let pwregex = new RegExp(conf.signup.PwRegex);

    if(pwregex.test($scope.password)){
      $http({
        method: 'POST',
        url: conf.backend.signup,
        data: {
          name: $scope.name,
          email: $scope.Email,
          password: $scope.password
        }
      }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
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
}]);