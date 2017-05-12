
angular.module('app')
.component('users', {
  bindings: { users: '<' },
  controller: function() {
    console.log("thjis is the home contgroller");
    this.clickHandler = function() {
      alert('something');
    }
  },
  templateUrl: 'partial-home.html'
//   template: `
//     <h1>Users</h1>
    
//     <button ng-click="$ctrl.clickHandler()">Do something</button>
    
//     <div ui-view></div>
// `,
})
.component('userq', {
  bindings: { users: '<' },
  controller: function() {
    this.clickHandler = function() {
      alert('something is fishy');
    }
  },
  templateUrl: 'about.html'
//   template: `
//     <h1>THIS IS THE ABOUT template</h1>
    
//     <button ng-click="$ctrl.clickHandler()">Do something</button>
    
//     <div ui-view></div>
// `,
})