var app = angular.module('app')
.component('logout',{
    controller:function($scope,$state){
        console.log("controller");
        if(!localStorage.getItem('auth_key')){
                alert('PLEASE LOGIN FIRST');
                $state.go('login');

    }
   else {
       window.localStorage.clear();
       $state.go('login');
       console.log("in else");
   }

}
})