 var app = angular.module('app')
  .component('pm', {
        templateUrl: 'src/js/components/portfolio/portfolio.html',
        controller: ['$scope', 'Hero', '$state', function ($scope, Hero, $state) {
            if(!localStorage.getItem('auth_key')){
                alert('PLEASE LOGIN FIRST');
                $state.go('login');
            }
            
            vm = this;
            vm.share_name=sessionStorage.getItem('sname');
            vm.sid=sessionStorage.getItem('sid');
            vm.sprice=sessionStorage.getItem('sprice');
            vm.sside=sessionStorage.getItem('sside');            
            vm.trader = [];
            vm.orders = [];
            vm.t_orders = [];
            vm.quantity = 0;
            vm.price_value = 0;

            Hero.getHeros().then(function (response) {
                vm.heroes = response.data;
                console.log(vm.heroes);
                vm.heroes.map(function (event) {
                    vm.trader.push({
                        trader_id: event.id,
                        trader_name: event.first_name
                    })
                    console.log(event.id);
                })
                // console.log(vm.trader);
            });

            Hero.getOrderList(localStorage.getItem('auth_key')).then(function (response) {
                //     for(var i =0; i< response.data.message.length; i++ ){
                //         // if(response.data.message[i].et_id==)
                //    		vm.orders.push(response.data.message[i]);
                //     }
                //     console.log(vm.orders);
                // console.log(response);
                vm.torders = response.data.message;
                console.log("this is response",response.data.message)
                // console.log(JSON.stringify(vm.torders));
                vm.torders.map(function (event) {
                    vm.orders.push({
                        id: event.id,
                        share_name : event.share_name,
                        current_price: event.current_price,
                        total_quantity: event.total_quantity,
                        investment: "10000",
                        overall_gain: "2000",
                        side: event.side
                    })
                    // console.log(event.id);
                })
            });



            this.trader_cancel = function () {
                  console.log('bye');
                vm.sprice = null;
                vm.quantity = null;
                vm.select1 = null;
                vm.stop_loss = null;
                vm.etid = null;
            }
            this.trader_draft = function () {
                Hero.save2({
                    share_id: vm.sid,
                    price: vm.sprice,
                    quantity: vm.quantity
                }, localStorage.getItem('auth_key')).then(function (response) {
                    vm.heroes = response.data;
                    console.log(vm.heroes);
                });
            }
            // this.getOrderList = function(){

            //          });


            this.trader_submit = function () {
                Hero.save1({
                    et_id: vm.etid,
                    share_id: vm.sid,
                    limit_price: vm.sprice,
                    current_price: vm.sprice,
                    side: vm.sside,
                    status: "open",
                    open_quantity: "1000",
                    stop_price: vm.stop_loss,
                    total_quantity: vm.quantity
                }, localStorage.getItem('auth_key')).then(function (response) {
                    vm.heroes = response.data;
                    console.log(vm.heroes);
                    console.log(vm.etid);
                    console.log(vm.sside);
                    sessionStorage.clear();
                    $state.reload();
                });

            }


        }]
    })