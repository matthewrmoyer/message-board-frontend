(function() {
	angular.module('app')
		.component('posts', {
			controller: ('PostsController', PostsController),
			templateUrl: './app/posts/posts.html'
		})


	PostsController.$inject = ['postsService', 'searchTermService', '$http']



	function PostsController(postsService, searchTermService, $http) {
		const vm = this
		vm.posts = posts()
		vm.downvote = downvote
		vm.upvote = upvote
		vm.createComment = createComment
		vm.searchTerm = searchTerm
		vm.showCommentFormBoolean = false
		vm.toggleShowCommentFormBoolean = toggleShowCommentFormBoolean

		vm.propertyNameToSortBy = '-voteCount'


		vm.$onInit = function() {
			console.log(vm.posts)


			$http.get('https://angular-message-board-backend.herokuapp.com/posts').then(function(response) {
				console.log(response.data)
			})
		}

		function posts() {
			return postsService.posts
		}

		function upvote(post) {
			post.voteCount++
		}

		function downvote(post) {
			if (post.voteCount > 0) {
				post.voteCount--
			}
		}

		function createComment(post) {
			post.comments.push(post.newComment.body)
			delete post.newComment
		}

		function toggleShowCommentFormBoolean(post) {
			post.showCommentFormBoolean ? post.showCommentFormBoolean = false : post.showCommentFormBoolean = true
		}


		function searchTerm() {
			return searchTermService.searchTerm
		}
	}

})()