(function() {
	'use strict'
	angular.module('app')
		.component('singlePost', {
			controller: ('SinglePostController', SinglePostController),
			templateUrl: './app/single-post/single-post.html'
		})

	SinglePostController.$inject = ['$stateParams', 'postsService']

	function SinglePostController($stateParams, postsService, $http) {
		const vm = this
		vm.postId;

		vm.posts = posts()
		vm.singlePost = {}

		vm.$onInit = function() {
			vm.postId = $stateParams.postId;
			console.log(vm.postId)
			getSinglePost().then(response => {
				vm.singlePost = response
			})	
		}

		function posts(){
			return postsService.posts
		}

		function getSinglePost(){
			return postsService.getSinglePost(vm.postId)
		}
	}

})()