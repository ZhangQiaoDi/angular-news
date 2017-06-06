//控制器模块
;
(function() {
	var controllers = angular.module('controllers', []);
	controllers.controller('indexCtrl', function($scope) {
		$scope.name = 'xixi';
		//默认的选项
		$scope.item = 0;
		$scope.itemOn = function(item) {
			$scope.item = item;
		}
	})
	
	controllers.controller('recommendCtrl',function($scope,$http,$timeout){
		$scope.title = "推荐";
		$scope.page = 0;
		$scope.news = [];
		$scope.newData = [];
		//控制loading
		$scope.isLoading = false;
		
		$scope.loadMore = function(){
			//点击的时候出现loading
			$scope.isLoading = true;
			$timeout(function() {
				$http({  //js/news.json
					url:'http://route.showapi.com/109-35',
					method:'GET',
					params:{
//					channel_id:6,				
						showapi_appid:"36112",
						showapi_sign:"6e2999952eeb4279907907dd42286292",
						channelId:"5572a108b3cdc86cf39001cd",
						page:$scope.page++
	
					}
				}).then(function(data){
					$scope.isLoading = false;
//					console.log(data);
//					console.log(data.data.showapi_res_body.pagebean.contentlist);
					$scope.news = $scope.news.concat(data.data.showapi_res_body.pagebean.contentlist);
//					console.log($scope.news)
				})
			}, 500)
		}
		$scope.loadMore();
		
		//弹窗
		$scope.isShowdialog = false;
		$scope.showdialog = function(){
//			console.log("1")
			$scope.isShowdialog = true;
		}
		
		$scope.searchName = "";
		//搜索框
		$scope.isShowSearchBar = false;
		$scope.showSearchBar = function(){
			$scope.isShowSearchBar = true;
		}
		
		//清空搜索框
		$scope.searchClear = function(){
			//$scope.isShowSearchBar = false;
			$scope.searchName = "";
		}
	})
	controllers.controller("detailCtrl", function($scope,$location,$http,$state) {
//		console.log($location.search());
//		console.log($state.params)
		$http({
			url:"http://route.showapi.com/109-35",
			method: "GET",
			params:{		
				showapi_appid:"36112",
				showapi_sign:"6e2999952eeb4279907907dd42286292",
				channelId:"5572a108b3cdc86cf39001cd",
				title:$state.params.title
			}
		}).then(function(data){
//			console.log(data)
//			console.log(data.data.showapi_res_body.pagebean.contentlist);
			$scope.newData = (data.data.showapi_res_body.pagebean.contentlist);
		})
		
		//默认隐藏预览图片组件
		$scope.isShowGallery = false;
		$scope.showGallery = function(){
			$scope.isShowGallery = true;
		}
		
	})
	
	controllers.controller('entertainCtrl',function($scope,$http,$timeout){
		$scope.title = "娱乐";
		$scope.type = "cp";
		$scope.page = '1';
		$scope.sc = [];
		$scope.isLoading = false;
		$scope.loadMore = function(){
			//点击的时候出现loading
			$scope.isLoading = true;
			$timeout(function() {
				$http({  
					url: 'http://localhost/1612-angular/ionic/php/story.php',
					method:'GET',
					params:{
						type: $scope.type,
						page: $scope.page++
					}
				}).then(function(data){
					$scope.isLoading = false;
//					console.log(data.data.showapi_res_body.pagebean.contentlist);
					$scope.sc = data.data.showapi_res_body.pagebean.contentlist.concat($scope.sc);
				})
			}, 500)
		}
		$scope.loadMore();
	})	
	controllers.controller('societyCtrl',function($scope,$http,$timeout){
		$scope.title = "社会";	
		$scope.type = "dp";
		$scope.page = '1';
		$scope.gs = [];
		$scope.isLoading = false;
		$scope.loadMore = function() {
			$scope.isLoading = true;
			$timeout(function() {
				$http({
					url: 'http://localhost/1612-angular/ionic/php/story.php',
					method: 'GET',
					params: {
						type: $scope.type,
						page: $scope.page++
					}
				}).then(function(data) {
					$scope.isLoading = false;
//					console.log(data.data.showapi_res_body.pagebean.contentlist);
					$scope.gs = data.data.showapi_res_body.pagebean.contentlist.concat($scope.gs);
//					$scope.gs = $scope.gs.concat(data.data.showapi_res_body.pagebean.contentlist);
				})
			}, 500)
		}
		$scope.loadMore();
	})
	controllers.controller('militaryCtrl',function($scope,$http,$timeout){		
		$scope.title = "军事";
		$scope.page = 0;
		$scope.ms = [];
		$scope.isLoading = false;
		$scope.loadMore = function(){
			//点击的时候出现loading
			$scope.isLoading = true;
			$timeout(function() {
				$http({ 
					url:'http://route.showapi.com/109-35',
					method:'GET',
					params:{
						showapi_appid:"36112",
						showapi_sign:"6e2999952eeb4279907907dd42286292",
						channelId:"5572a108b3cdc86cf39001cd"
					}
				}).then(function(data){
					$scope.isLoading = false;
//					console.log(data);
//					console.log(data.data.showapi_res_body.pagebean.contentlist);
					$scope.ms = (data.data.showapi_res_body.pagebean.contentlist);
				})
			}, 500)
		}
		$scope.loadMore();
	})
	
	controllers.controller('seekCtrl',function($scope,$http){
		$scope.name = "嘻嘻";
	})

})();