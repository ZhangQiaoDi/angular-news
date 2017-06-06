;(function(){
	var router = angular.module('router',[])
	router.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
		$stateProvider.state('index',{
			url:'/index',
			templateUrl:'template/index.html',
			controller:'indexCtrl'
		})
		//推荐
		.state('index.recommend',{
			url:'/recommend',
			templateUrl:'template/recommend.html',
			controller:'recommendCtrl'
		})
		
		//娱乐
		.state('index.entertain',{
			url:'/entertain',
			templateUrl:'template/entertain.html',
			controller: "entertainCtrl"
		})
		
		//社会
		.state('index.society',{
			url:'/society',
			templateUrl:'template/society.html',
			controller: "societyCtrl"
		})
		
		//军事
		.state('index.military',{
			url:'/military',
			templateUrl:'template/military.html',
			controller: "militaryCtrl"
		})
		
		//新闻详情页
		.state('detail',{
			url:'/detail/:title',
			templateUrl:'template/detail.html',
			controller: "detailCtrl"
		})
		
		//头条搜索
		.state('seek',{
			url:'/seek',
			templateUrl:'template/seek.html',
			controller:'seekCtrl'
		})
		
		$urlRouterProvider.when('','/index/recommend');
	}])
})();	