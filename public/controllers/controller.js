var myApp= angular.module('myApp',[]);
myApp.controller('AppCtrl',['$scope','$http',function($scope,$http){

	console.log("hello world from COOntroller");
	$scope.contactlist=[];
	$scope.contact;
    $scope.refresh = function(){
     $http.get('/contactlist').then(function(response){
     	console.log(response.data);
     	$scope.contactlist=response.data;
     	
     },function(){
     	console.log("ERROR");
     });
 
};

$scope.refresh();
 

     $scope.addContact = function(){
     	console.log($scope.contact);
     	$http.post('/contactlist', $scope.contact).then(function(response){
     		console.log(response);
     		$scope.refresh();
     	});

     };

	$scope.remove = function(id) {
		console.log(id);
		$http.delete('/contactlist/' + id).then(function(response){
			console.log(response);
			$scope.refresh();
		});

	};	
	
}]);
/*function AppCtrl($scope){

}
*/