 var app = angular.module('app')
 .service('Hero', ['$http', function ($http) {

        //private data
        //public api to return data
        this.getHeros = function () {

            //return $http.get('mock-data/mock-heroes.json');
            return $http.get('http://localhost:8081/getTraders')
        }
        this.getpm = function () {
            return $http.get('http://localhost:8081/getPortfolioManager')

        }
        // this.getHeroById = function (id) {
        //     var url = 'http://localhost:3000/hero/' + id;
        //     //console.log(url);
        //     return $http.get(url);
        this.save1 = function (hero, xyz) {
            var url = 'http://localhost:8081/giveOrder/' + xyz;
            //console.log(url);
            return $http.post(url, hero);
        };
        this.save = function (hero) {
            var url = 'http://localhost:8081/login';
            //console.log(url);
            return $http.post(url, hero);
        };
        this.save2 = function (hero, xyz) {
            var url = 'http://localhost:8081/saveDraft/' + xyz;
            //console.log(url);
            return $http.post(url, hero);
        };
        this.getEt = function (key, id) {
            return $http.get('http://localhost:8081/getETPendingOrderHistory/' + key + '/' + id)
        }
        this.createBlocks = function (key, order_id) {
            return $http.post('http://localhost:8081/buildBlocks/' + key, {
                id: order_id
            })
        }
        this.getOrderList = function (xyz) {

            /*$http.get('http://localhost:8081/getPendingOrders/'+sessionId).then(function(response) {
               for(var i =0; i< response.data.message.length; i++ ){
                $ctrl.pendingOrderList.push(response.data.message[i]);
               }
           }, function() {});*/
            console.log(xyz);
            var url = 'http://localhost:8081/getPendingOrders/' + xyz;
            console.log("URL: " + url)
            return $http.get(url);
        }
        this.getBlocks = function (key) {
            return $http.get('http://localhost:8081/getBuildBlocks/' + key);
        }
        this.getorId = function (key) {
            return $http.get('http://localhost:8081/getOrderId/' + key);
        }
    }]);