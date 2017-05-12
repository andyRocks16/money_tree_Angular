var app = angular.module('app')
    .component('login', {
        templateUrl: 'src/js/components/login/index.html',
        controller: ['$scope', 'Hero', '$state', function($scope, Hero, $state) {
            vm = this;
            vm.heroobj = {
                id: "ap",
                password: "9929061500",
                access: "PM"
            };
            vm.heroes = ''

            this.login = function() {
                    vm.verify = {

                        id: vm.username,
                        password: vm.password,
                        access: vm.access
                    };

                    Hero.save(vm.verify).then(function(response) {



                        vm.heroes = response.data;
                        console.log(vm.heroes);
                        alert("Successfully logged in")
                        var body = vm.heroes;
                        localStorage.setItem('auth_key', body[0].message[0].data);

                        // console.log($scope.username);
                        vm.heroes.map(function(event) {
                                // for(prop in event)
                                // {
                                // 	console.log(prop + event);

                                // }
                                localStorage.setItem('access', event.acess);
                                if (event.acess == 'portfolio_manager') {

                                    $state.go('pm_login')
                                }
                                if (event.acess == 'equity_trader') {
                                    $state.go('et_login')
                                }


                            })
                            // if($scope.heroes.status=="true")
                            // {
                            // 	console.log("ma_ki")
                            // 	// $state.go('pm_login');
                            // }

                    });


                }
                // console.log("child");
        }]
    })

.component('homesad', {
    controller: function($state) {
        console.log('ddds');
        //    console.log(localStorage.getItem("lastname"));
        if (localStorage.getItem("access") == "portfolio_manager") {
            $state.go('pm_login')
        }
        if (localStorage.getItem("access") == "equity_trader") {
            $state.go('et_login')
        }
    }
})