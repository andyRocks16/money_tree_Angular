var app = angular.module('app')
    .component('traderOrder', {
        templateUrl: 'src/js/components/trader/order/trader_order.html',
        controller: function($scope, traderService,$state) {
             if(!localStorage.getItem('auth_key')){
                alert('PLEASE LOGIN FIRST');
                $state.go('login');
            }
            var $ctrl = this;
            $ctrl.user = "priyam";
            $ctrl.accordian = [];
            $ctrl.portfolioList = [];
            $ctrl.dataList = [];
            $ctrl.column = 'pm_id';
            $ctrl.reverse = false;
            $ctrl.fullName = function(obj) {
                return obj.first_name + " " + obj.last_name;

            }

            $ctrl.portfolioData = function() {
                traderService.getPortfolioManager().then(function(response) {
                    for (var i = 0; i < response.data.length; i++) {
                        $ctrl.portfolioList.push(response.data[i]);
                    }

                }, function() {});
            }
             
    
    // sort ordering (Ascending or Descending). Set true for desending
              
             $ctrl.sortColumn = function(col){
                $ctrl.column = col;
                if($ctrl.reverse){
                    $ctrl.reverse = false;
                }else{
                    $ctrl.reverse = true;
                    
                }
            };
            $ctrl.sortClass = function(col){
                if($ctrl.column == col ){
                    if($ctrl.reverse){
                        return 'arrow-down';    
                    }else{
                        return 'arrow-up';
                    }
                }else{
                    return '';
                }
            };  
            $ctrl.portfolioDetails = function(id) {
                traderService.getETOrderHistory(localStorage.getItem('auth_key'), id).then(function(response) {
                    $ctrl.loanList = [];
                    console.log(response.data);
                    for (var i = 0; i < response.data.message.length; i++) {
                        if (response.data.message[i].pm_id === id) {
                            $ctrl.loanList.push(response.data.message[i]);
                            $ctrl.dataList[id] = $ctrl.loanList;
                            $ctrl.accordian[id] = true;
                        }
                    }
                }, function() {});
            }

            $ctrl.portfolioData();
        }
    })