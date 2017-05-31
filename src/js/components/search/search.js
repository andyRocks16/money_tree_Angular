//import typeahead from './../../node_modules/angular-ui-bootstrap/src/typeahead/index-nocss.js';

var app = angular.module('app')
    .component('search', {
        templateUrl: 'src/js/components/search/search.html',
        controller: function(GetService,$state) {
            sessionStorage.clear();
            var self = this;
            
            this.save_sharename = function(sname,sid,sprice,sside) {
                sessionStorage.setItem('sname', sname);
                sessionStorage.setItem('sid',sid);
                sessionStorage.setItem('sprice',sprice);
                sessionStorage.setItem('sside',sside);
                console.log(sid);
                console.log(sside + " this is the side");
                console.log("inside share");
                console.log(sname);
                $state.reload();
            self.buy_share_name = sname;                
            }
            this.search = function() {
                // console.log("In2")
                // console.log(self.data);
                GetService.getData(self.data).then(function(res) {
                    // console.log("In3")
                    self.arr = res.data;
                    // console.log(self.arr);
                });
            }
        }

    });

app.service('GetService', ['$http', function($http) {
    this.getData = function(a) {
        console.log('http://localhost:8081/searchShares/' + a);
        return $http.get('http://localhost:8081/searchShares/' + a);
    }
}]);

// myApp.factory("States", function(){
//   var states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
  
//   return states;
  
// });

// app.controller("TypeaheadCtrl", function($scope, States) {
	
// 	$scope.selected = undefined;
	
// 	$scope.states = States;
	
// });
