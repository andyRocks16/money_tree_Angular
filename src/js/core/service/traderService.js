var app = angular.module('app');
app.service('traderService', ['$http', function($http) {
    var $ctrl = this;
    $ctrl.getPortfolioManager = function() {
        var url = 'http://localhost:8081/getPortfolioManager';
        return $http.get(url);
    }
    $ctrl.getETOrderHistory = function(sessionId, id) {
            var url = 'http://localhost:8081/getETOrderHistory/' + sessionId + '/' + id;
            console.log(url);
            return $http.get(url);
        }
        // $ctrl.getPendingOrders = function(sessionId1) {
        //     var url = 'http://localhost:8081/getPendingOrders/' + sessionId1;
        //     return $http.get(url);
        // }

}])