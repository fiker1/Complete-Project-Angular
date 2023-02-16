var myfkr = angular.module('myfkr',['ngRoute','ngAnimate']);
myfkr.config(['$routeProvider',  function($routeProvider){
   
   $routeProvider
   .when('/home',{
      templateUrl: 'views/home.html',
      controller: 'fkrcontroller'
   })
   .when('/contact',{
      templateUrl: 'views/contact.html',
      controller: 'contactcontroller'
   })
   .when('/success-message',{
      templateUrl: 'views/success-message.html',
      controller: 'contactcontroller'
   })
   .when('/directory',{
      templateUrl: 'views/directory.html',
      controller: 'fkrcontroller'
   }).otherwise({
      redirectTo: '/directory'
   });
}]); 

myfkr.controller('fkrcontroller',['$scope', function($scope){
 $scope.removefkr1 = function(fkr1){
  var removefkr1 = $scope.fkrs.indexOf(fkr1);
  $scope.fkrs.splice(removefkr1, 1);
 };

 $scope.addFkr = function(){
   $scope.fkrs.push({
     name: $scope.newfkr.name,
     color: $scope.newfkr.color,
     price: parseInt($scope.newfkr.price),
     available: true
    });
    $scope.newfkr.name="",
    $scope.newfkr.color="",
    $scope.newfkr.price=""
 };
 $scope.fkrs = [
    {
  name: "one",
  color: "green",
  price: 10, 
  available: true,
  thumb: "content/css/img/logo.PNG"
 },
 {
    name: "two",
    color: "yellow",
    price: 20,
    available: true,
    thumb: "content/css/img/logo.PNG"
 },
 {
    name: "three",
    color: "red",
    price: 40,
    available: true,
    thumb: "content/css/img/logo.PNG"
 },
 {
    name: "four",
    color: "green",
    price: 50,
    available: true,
    thumb: "content/css/img/logo.PNG"
 },
 {
   name: "five",
   color: "yellow",
   price: 50,
   available: true,
   thumb: "content/css/img/logo.PNG"
},
{
   name: "six",
   color: "red",
   price: 50,
   available: true,
   thumb: "content/css/img/logo.PNG"
}

];
$scope.removeAll = function(){
   $scope.fkrs = [];
};
// $http.get('data/fkrs.json').success(function(data){
//    $scope.fkrs = data;
//    });
// console.log(angular.toJson($scope.fkrs));
// }]);

 }]);
 myfkr.controller('contactcontroller',['$scope', '$location', function($scope,$location){
   $scope.sendmessage = function(){
      $location.path('success-message');
   };
   }]);
