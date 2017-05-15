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
		vm.upvote = upvote
		vm.downvote = downvote
		vm.createComment = createComment
		vm.getComments = getComments()



		//TODO GET COMMENTS AND THEN ADD TO THE SINGLEPOST OBJECT AS AN ARRAY


		vm.$onInit = function() {
			vm.postId = $stateParams.postId;
			console.log(vm.postId)
				//TODO refactor this so it happens in service and then services just sends object in correct format
			singlePost().then(response => {
				vm.singlePost.id = response.data[0].id
				vm.singlePost.author = response.data[0].author
				vm.singlePost.title = response.data[0].title
				vm.singlePost.body = response.data[0].body
				vm.singlePost.image_url = response.data[0].image_url
				vm.singlePost.vote_count = response.data[0].vote_count
				vm.singlePost.created_at = response.data[0].created_at
				getComments()
				console.log(vm.singlePost)
			})
		}

		function posts() {
			return postsService.posts
		}

		function singlePost() {
			return postsService.getSinglePost(vm.postId)
		}

		function getComments() {
			var x = postsService.posts
			x.forEach(element => {
				if (element.id == vm.postId) {
					console.log(element.comments)
					vm.singlePost.comments = element.comments
				}
			})
		}


		function upvote(post) {
			post.vote_count++ //frontend
				//patch backend
				postsService.patchPostService(post)
		}

		function downvote(post) {
			//frontend
			if (post.vote_count > 0) {
				post.vote_count--
			}
			//patch backend
			postsService.patchPostService(post)
		}



		function createComment(post) {
			//add to frontend
			var newComment = {
				content: post.newComment.body,
				created_at: new Date(),
				post_id: post.id
			}

			post.comments.push(newComment)
			console.log(post.comments)

			//add to backend
			postsService.createCommentService(newComment)
				//clear form
			delete post.newComment
		}



	}

})()