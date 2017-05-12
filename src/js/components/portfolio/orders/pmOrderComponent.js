var app = angular.module('app')
    .component('portfolioOrder', {
        templateUrl: 'src/js/components/portfolio/orders/pm_order.html',
        controller: function($scope, portfolioService,$state) {
             if(!localStorage.getItem('auth_key')){
                alert('PLEASE LOGIN FIRST');
                $state.go('login');
            }
            var $ctrl = this;
            $ctrl.user = "priyam";
            $ctrl.accordian = [];
            $ctrl.accordian1 = [];
            $ctrl.pendingOrderList = [];
            $ctrl.traderList = [];
            $ctrl.dataList = [];
            $ctrl.dataList1 = [];
            $ctrl.fullName = function(obj) {
                return obj.first_name + " " + obj.last_name;

            }

            $ctrl.traderData = function() {
                portfolioService.getTraders().then(function(response) {
                    for (var i = 0; i < response.data.length; i++) {
                        $ctrl.traderList.push(response.data[i]);
                    }

                }, function() {});
            }
            $ctrl.traderDetails = function(id) {
                portfolioService.getPMOrderHistory(localStorage.getItem('auth_key'), id).then(function(response) {
                    $ctrl.loanList = [];
                    for (var i = 0; i < response.data.message.length; i++) {
                        if (response.data.message[i].et_id === id) {
                            $ctrl.loanList.push(response.data.message[i]);
                            $ctrl.dataList[id] = $ctrl.loanList;
                            $ctrl.accordian[id] = true;
                        }
                    }
                }, function() {});
            }

            $ctrl.orderHistory = function(id) {
                //  $ctrl.traderList = [];
                $ctrl.loanList = [];
                portfolioService.getPendingOrders(localStorage.getItem('auth_key'), id).then(function(response) {
                    console.log("IN");
                    for (var i = 0; i < response.data.message.length; i++) {
                        $ctrl.pendingOrderList.push(response.data.message[i]);
                        $ctrl.loanList.push(response.data.message[i]);
                        $ctrl.dataList1[id] = $ctrl.loanList;
                        $ctrl.accordian1[id] = true;
                    }
                    console.log($ctrl.pendingOrderList);
                }, function() {});
            }
            $ctrl.orderHistory();
            $ctrl.traderDetails();
            $ctrl.traderData();
        },

    });