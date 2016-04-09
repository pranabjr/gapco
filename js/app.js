'use strict';

angular.module('gapco', ['ui.router','ngResource'])
.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
        $stateProvider
        
            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    //'header': {
                    //    templateUrl : 'views/header.html',
                    //},
                    'company': {
                        templateUrl : 'views/company.html',
                    },
                    'portfolio': {
                        templateUrl : 'views/portfolio.html',
                        controller  : 'PortfController'
                    },
                    'services': {
                        templateUrl : 'views/services.html',
                        controller  : 'PortfController'
                    },
                    'contactus': {
                        templateUrl : 'views/contactus.html',
                    },
                    
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                }

            })
$urlRouterProvider.otherwise('/');
    }])
;