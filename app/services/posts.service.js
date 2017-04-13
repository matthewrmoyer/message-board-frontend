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
				response.data.forEach(element => {
					element.comments = []
					vm.posts.push(element)
				})
				$http.get('https://angular-message-board-backend.herokuapp.com/comments')
					.then(function(response) {
						response.data.forEach(commentElement => {
							vm.posts.forEach(postElement => {
								if (postElement.id == commentElement.post_id) {
									postElement.comments.push(commentElement)
								}
							})

						})

					})
			})



		this.createPostService = createPostService

		function createPostService(newPost) {
			console.log('hitting createPost in postsService')
				//set defaults
			newPost.vote_count = 0
			newPost.comments = []
			newPost.created_at = new Date()
			this.posts.push(newPost) //show on page
				//add animation start that starts and ends based on post to server function run
			console.log(newPost)
				//post to server
			$http.post('https://angular-message-board-backend.herokuapp.com/posts', newPost)
				.then(response => {
					console.log(response)
				})
		}
	}
})()