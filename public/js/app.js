var app = angular.module('aggravationApp', ['ui.router', 'firebase']);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');

	$stateProvider
	.state( 'home' ,{
		url:'/home',
		views: {

			 '': { templateUrl: '../views/partial-home.html' },
			 'columnThree@home':{
				templateUrl:'../views/diceTmpl.html',
				controller:'diceChatCtrl'},

			'columnOne@home':{
				templateUrl:'../views/homeTmpl.html',
				controller:'homeCtrl'
			},
			'columnTwo@home': {

				templateUrl:'./views/data.html',
				controller: 'scoresCtrl'
			}

		}
		
	})
	
})