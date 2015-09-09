// SETTING THE MODULE

angular.module("firstModule", [] );

// GETTING THE MODULE AND SETTING THE CONTROLLER

angular.module("firstModule").controller("firstController", ["$scope", function($scope){
	$scope.foo = "holla";

}]);