var app = angular.module('angularServices');

app.controller('mainCtrl', function($scope, mainService){
	$scope.message = "angular is working brah!";

	$scope.data = mainService.getQuotes();

	$scope.addQuote = function(){

		mainService.addQuote();

	};

	$scope.addQuote = function(str,auth){

		if (!auth){ auth = 'Ziggy Stardust'};

		$scope.data.push({ text: str, author: auth});
		$scope.newQuote = "";
		$scope.newAuthor= "";
		console.log($scope.data);
	};
});