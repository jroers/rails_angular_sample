angular.module('SampleApp', ['ui.router', 'templates'])
	.config(config)
	.controller("HomeController", HomeController);

config.$inject(["$stateProvider", "$urlRouterProvider"]);
function config($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'home.html',
			controller: 'HomeController',
			controllerAs: 'home'
		});
}

// CONTROLLERS:

HomeController.$inject([]);
function HomeController() {
	var vm = this;
	console.log("Home Controller!!");
	vm.homeTest = "Welcome to the homepage.";
}
