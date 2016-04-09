'use strict';

angular.module('gapco')
.controller('PortfController',['$scope','PortfService',function($scope, PortfService){

            $scope.portf= PortfService.getPFs();
            $scope.serv= PortfService.getServs();

            //var promotion= menuFactory.getPromotion(parseInt($stateParams.id,10));
            
            //$scope.portf = portf;

            //$scope.ftDish = [];

            //$scope.showDish = true;
            //$scope.message="Loading ...";

            //$scope.ftDish = menuFactory.getDishes().get({id:0});
            
            /*menuFactory.getDish(0)
            .then(
                function(response){
                    $scope.ftDish = response.data;
                    $scope.showDish = true;
                    },

                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                    }
                 );*/

            //var exChef=corporateFactory.getLeader(3);
            //$scope.exChef=exChef;
       }])