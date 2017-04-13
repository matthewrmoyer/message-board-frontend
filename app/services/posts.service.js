(function() {
	'use strict'
	angular.module('app')
		.service('postsService', service)

	service.$inject = ['$http']

	function service($http) {
		const vm = this
		this.posts = []

		$http.get('https://angular-message-board-backend.herokuapp.com/posts')
		.then(function(response) {
			console.log(response.data)
			console.log(response.data.length)
			console.log(Array.isArray(response.data))
			response.data.forEach(element =>{
				vm.posts.push(element)
			})
		})


		this.createPostService = createPostService

		function createPostService(newPost) {
			console.log('hitting createPost in postsService')
			newPost.voteCount = 0
			newPost.comments = []
			newPost.time = new Date()
			this.posts.push(newPost)
		}
	}
})()