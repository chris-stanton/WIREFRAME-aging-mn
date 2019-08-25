
let myApp = angular.module('myApp', ['ngRoute', '720kb.tooltips']);

myApp.config(['$routeProvider', 'tooltipsConfProvider', function($routeProvider, tooltipsConfProvider) {

  // angular tooltip (global config)
  tooltipsConfProvider.configure({
    'smart': true,
    'size': 'large',
    'side': 'bottom',
    'speed': 'slow',
    'tooltipTemplateUrlCache': false
  });

  // angular route provider (global config)
  $routeProvider
    .when ('/landing', {
      templateUrl: './views/landing.html'
    })
    .when ('/programs-services', {
      templateUrl: './views/programs-services.html'
    })
    .when ('/housing', {
      templateUrl: './views/housing.html'
    })
    .otherwise ( {
      redirectTo: '/landing'
    });

//end myApp.config
}]);
