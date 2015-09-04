var app = angular.module('aggravationApp', ['ui.router', 'firebase']);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');

	$stateProvider
	.state( 'home' ,{
		url:'/home',
		views: {

			 '': { templateUrl: 'viewsHtml/partial-home.html' },
			 'columnThree@home':{
				templateUrl:'viewsHtml/diceTmpl.html',
				controller:'diceChatCtrl'},

			'columnOne@home':{
				templateUrl:'viewsHtml/homeTmpl.html',
				controller:'homeCtrl'
			},
			'columnTwo@home': {

				templateUrl:'viewsHtml/data.html',
				controller: 'scoresCtrl'
			}

		}
		
	})
	
})