var app = angular.module('aggravationApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');

	$stateProvider
	.state( 'home' ,{
		url:'/home',
		views: {

			 '': { templateUrl: '../views/partial-home.html' },
			 'columnThree@home':{
				templateUrl:'../views/diceTmpl.html',
				controller:'homeCtrl'},

			'columnOne@home':{
				templateUrl:'../views/homeTmpl.html',
				controller:'homeCtrl'
			},
			'columnTwo@home': {

				templateUrl:'./views/data.html',
				controller: 'homeCtrl'
			}

		}
		
	})
	
})