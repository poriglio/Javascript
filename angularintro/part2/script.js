angular.module("dogModule", []);

angular.module("dogModule").controller("dogController", ["$scope", function($scope){
	
	$scope.hoverColor = function ($event) {

		$scope.colorChange = "magic";

	}

	$scope.exitHoverColor = function ($event) {

		$scope.colorChange = "normal";

	}




}]);