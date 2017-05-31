var app=angular.module('app')
.component('draft', {
	templateUrl: './src/js/components/draft/draft.html',
	controller: function(GetDrafts, editDrafts, submitData,Heros,$state){
         if(!localStorage.getItem('auth_key')){
                alert('PLEASE LOGIN FIRST');
                $state.go('login');
            }
		var auth_key = localStorage.getItem('auth_key');
		console.log("co")
			var self = this;
			self.trader = [];
			self.showEdit = [];
			GetDrafts.getData(auth_key).then(function(res){
			self.drafts	= res.data;	
			console.log(self.drafts.message);
		})
			Heros.getHeros(auth_key).then(function (response) {
                self.heroes = response.data;
                console.log(response.data);
                console.log(self.heroes);
                self.heroes.map(function (event) {
                    self.trader.push({
                        trader_id: event.id,
                        trader_name: event.first_name
                    })
                    console.log(event.id);
                })
                console.log(self.trader);
            });
		self.delete = function(share_id){
				console.log(share_id);
				GetDrafts.deletDraft(share_id, auth_key).then(function(res){
					
					self.drafts	= res.data;	
					console.log(self.drafts.message);
				});
				for(var i = 0;i<self.drafts.message.length;i++)
              				{
              					if(self.drafts.message[i].id == share_id)
              					{
              						self.drafts.message.splice(i,1)
              					}
              				}
			          	console.log(self.drafts.message.length);
			          	console.log(share_id);
			}
		self.getDetails = function(draft_id){
			
			self.showEdit[draft_id]  = true;
			editDrafts.getDraft(auth_key, draft_id).then(function(res){
				this.drafts = [];
				console.log(typeof(res.data.message))
				self.dra = res.data.message;
				console.log(self.dra);
				self.dra.map(function(event)
				{
					drafts.push({qty:event.quantity,price:event.price})
				})
				console.log(drafts[0].qty);
				self.quantity = drafts[0].qty;
				self.price = drafts[0].price;
				self.currentPrice = drafts[0].qty*drafts[0].price;
				self.stopLoss = 1000;
			})
		}
		self.getDetails1 = function(draft_id){
			
			self.showEdit[draft_id]  = false;
		}
		self.submitPortfolioDetails = function(draft_id){
                    auth_key = auth_key;
			          submitData.saveData({et_id: "sm",
                    share_id: "1",
                    limit_price: "10",
                    current_price: self.price,
                    side: "buy",
                    status: "open",
                    open_quantity: "100",
                    stop_price: "1000",
                    total_quantity: self.quantity},auth_key).then(function(response){
                    	console.log("hello");
			          	self.showEdit[draft_id]  = false;
			          	console.log(response.data);
			          })
              				for(var i = 0;i<self.drafts.message.length;i++)
              				{
              					if(self.drafts.message[i].id == draft_id)
              					{
              						self.drafts.message.splice(i,1)
              					}
              				}
			          	console.log(self.drafts.message.length);
						  self.delete(draft_id);

					}
	}
})

.service('GetDrafts', ['$http', function($http){
	this.getData = function(sessionID){
		console.log('http://localhost:8081/getDrafts/' + sessionID);
        return $http.get('http://localhost:8081/getDrafts/' + sessionID);
	};

	this.deletDraft = function(share_id, session_id){
		var data = {id:share_id}
		var url = 'http://localhost:8081/delDraft/'+session_id
		return $http.post(url, data);
	}
}])

.service('editDrafts', ['$http', function($http){
	this.editDraft = function(sessionID, draft_id){
		console.log('http://localhost:8081/editDraft/' + sessionID);
		var data = {id:draft_id}
        return $http.post('http://localhost:8081/editDraft/' + sessionID, data);
	};
	this.getDraft = function(sessionID, draft_id){
		console.log('http://localhost:8081/getDraftID/' + sessionID+"/"+draft_id);
		var data = {id:draft_id}
        return $http.get('http://localhost:8081/getDraftID/'  + sessionID+"/"+draft_id);
	};
}])
.service('submitData',['$http', function($http){
	this.saveData = function(data, sessionId){
           var url = 'http://localhost:8081/giveOrder/' + sessionId;
		   return $http.post(url, data);
	}
}])
.service('Heros', ['$http', function ($http) {

        //private data
        //public api to return data
        this.getHeros = function () {

            //return $http.get('mock-data/mock-heroes.json');
            return $http.get('http://localhost:8081/getTraders')
        } 
}])