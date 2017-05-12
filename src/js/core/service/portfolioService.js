var app = angular.module('app');
app.service('portfolioService', ['$http', function($http) {
    var $ctrl = this;
    $ctrl.getTraders = function() {
        var url = 'http://10.203.60.164:8081/getTraders';
        return $http.get(url);
    }
    $ctrl.getPMOrderHistory = function(sessionId, id) {
        var url = 'http://10.203.60.164:8081/getPMOrderHistory/' + sessionId + '/' + id;
        return $http.get(url);
    }
    $ctrl.getPendingOrders = function(sessionId, trader_id) {
        var url = 'http://10.203.60.164:8081/getPendingOrdersId/' + sessionId + "/" + trader_id;
        console.log(url);
        return $http.get(url);
    }
}])