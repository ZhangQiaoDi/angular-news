//组件和指令模块
;(function(){
	var directives = angular.module('directives',[])
	//头部
	directives.directive("wheader", function() {
		return {
			templateUrl: "directives/wheader.html"
		}
	})
		
	//底部
	directives.directive('wfooter',function(){
		return{
			templateUrl:'directives/wfooter.html'
		}
	})	
		
	//轮播图
	directives.directive("wswiper", function() {
		return {
			templateUrl: "directives/wswiper.html",
			link: function(scope, ele, attr) {
				var swiper = new Swiper('.swiper-container', {
					pagination: '.swiper-pagination',
					paginationClickable: true
				});
			}
		}
	})
	
	//loading
	directives.directive("wloading", function() {
		return {
			templateUrl: "directives/wloading.html"
		}
	})
	
	//popup
	directives.directive("wpopup", function() {
		return {
			templateUrl: "directives/wpopup.html"
		}
	})
	
	
	//新闻列表
	directives.directive("wlist", function() {
		return {
			templateUrl: "directives/wlist.html"
		}
	})
	
	//娱乐
	directives.directive('wyule',function(){
		return{
			templateUrl:'directives/wyule.html'
		}
	})
	
	//军事
	directives.directive('wjunshi',function(){
		return{
			templateUrl:'directives/wjunshi.html'
		}
	})
})();