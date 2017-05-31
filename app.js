angular.module("app", [
        'ui.router'
    ])


    .config(function ($stateProvider, $urlRouterProvider) {


        $stateProvider


            .state('login', {
                url: '/welcome',
                component: 'login'
            })


            .state('verify', {
                url: '/resolve',
                controller: function ($scope, service) {
                    vm = this;
                    this.resolve = function () {

                    }
                    // console.log(service.getItems());
                    // service.removeItem();
                    // console.log(service.getItems());
                }
            })

            .state('pm_login', {
                url: '/PM',
                component: 'pm'
            })


            .state('pm_login1', {
                url: '/PM',
                component: 'pm'
            })


            .state('et_login', {
                url: '/ET',
                component: 'et'
            })

    .state('drafts',{
        url: '/draft',
        component: 'draft'
    })
    
        .state('traderOrder', {
            url: '/traderOrder',
            component: 'traderOrder'
        })

         .state('home', {
            // url: '/home',
            component: 'homesad'
        })
         .state('aboutUs', {
            url: '/about-us',
            component: 'aboutUs'
        })
         .state('marketInformation', {
            url: '/market-information',
            component: 'marketInfo'
        })
         .state('contactUs', {
            url: '/contact-us',
            component: 'contactUs'
        })
        .state('logout',{
            url:'/logout',
            component:'logout'

        }) 

    .state('portfolioOrder', {
            url: '/portfolioOrder',
            component: 'portfolioOrder'
        });





        $urlRouterProvider.otherwise('/welcome');




    })
    // .component('home', {
    //     templateUrl: 'src/home.html',
    //     controller: function () {
    //         console.log("home");
    //     },

    // })
    // .service('Hero', ['$http', function ($http) {

    //     //private data
    //     //public api to return data
    //     this.getHeros = function () {

    //         //return $http.get('mock-data/mock-heroes.json');
    //         return $http.get('http://localhost:8081/getTraders')
    //     }
    //     this.getpm = function () {
    //         return $http.get('http://localhost:8081/getPortfolioManager')

    //     }
    //     // this.getHeroById = function (id) {
    //     //     var url = 'http://localhost:3000/hero/' + id;
    //     //     //console.log(url);
    //     //     return $http.get(url);
    //     this.save1 = function (hero, xyz) {
    //         var url = 'http://localhost:8081/giveOrder/' + xyz;
    //         //console.log(url);
    //         return $http.post(url, hero);
    //     };
    //     this.save = function (hero) {
    //         var url = 'http://localhost:8081/login';
    //         //console.log(url);
    //         return $http.post(url, hero);
    //     };
    //     this.save2 = function (hero, xyz) {
    //         var url = 'http://localhost:8081/saveDraft/' + xyz;
    //         //console.log(url);
    //         return $http.post(url, hero);
    //     };
    //     this.getEt = function (key, id) {
    //         return $http.get('http://localhost:8081/getETPendingOrderHistory/' + key + '/' + id)
    //     }
    //     this.createBlocks = function (key, order_id) {
    //         return $http.post('http://localhost:8081/buildBlocks/' + key, {
    //             id: order_id
    //         })
    //     }
    //     this.getOrderList = function (xyz) {

    //         /*$http.get('http://localhost:8081/getPendingOrders/'+sessionId).then(function(response) {
    //            for(var i =0; i< response.data.message.length; i++ ){
    //             $ctrl.pendingOrderList.push(response.data.message[i]);
    //            }
    //        }, function() {});*/
    //         console.log(xyz);
    //         var url = 'http://localhost:8081/getPendingOrders/' + xyz;
    //         console.log("URL: " + url)
    //         return $http.get(url);
    //     }
    //     this.getBlocks = function (key) {
    //         return $http.get('http://localhost:8081/getBuildBlocks/' + key);
    //     }
    //     this.getorId = function (key) {
    //         return $http.get('http://localhost:8081/getOrderId/' + key);
    //     }
    // }]);