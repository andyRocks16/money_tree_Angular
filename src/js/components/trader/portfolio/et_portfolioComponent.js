var app = angular.module('app')
    .component('et', {
        templateUrl: 'src/js/components/trader/portfolio/etlogin.html',
        controller: function (Hero, $state, $scope) {
            if (!localStorage.getItem('auth_key')) {
                alert('PLEASE LOGIN FIRST');
                $state.go('login');
            }
            var vm = this;
            vm.data = [];
            vm.order = [];
            vm.blocks = [];
            vm.blk = [];
            vm.fn = [];
            vm.orId = [];

            vm.generateBlocks = function (order_id) {

                Hero.createBlocks(localStorage.getItem('auth_key'), order_id).then(function (response) {
                    console.log(response.data.message);
                    // $state.reload();
                    window.location.reload();
                })

            }

           var getBlocks = function() {

                Hero.getBlocks(localStorage.getItem('auth_key')).then(function (response) {
                    vm.blk.push(response.data.message);
                    // console.log(response.data.message);
                })
            };
            getBlocks();

            Hero.getpm().then(function (response) {
                console.log(response.data);
                var id;
                response.data.forEach(function(data){
                    vm.fn.push(data.first_name);
                    (function(id){
                       Hero.getEt(localStorage.getItem('auth_key'),id).then(function (response) {
                            console.log(response.data);
                            vm.order.push(response.data.message);
                        })
                        // if(vm.order[1] !== "undefined"){
                        //     vm.order[1].splice(0,1);
                        //     vm.order[1].splice(1,1);    
                        // }
                        
                    })(data.id);
                });

                
            });

        }

    })