(function() {
	angular.module('app')
		.component('posts', {
			controller: ('PostsController', PostsController),
			templateUrl: './app/posts/posts.html'
		})


	PostsController.$inject = ['postsService', 'searchTermService']



	function PostsController(postsService, searchTermService, $http) {
		const vm = this
		vm.posts = posts()
		vm.downvote = downvote
		vm.upvote = upvote
		vm.createComment = createComment
		vm.searchTerm = searchTerm
		vm.showCommentFormBoolean = false
		vm.toggleShowCommentFormBoolean = toggleShowCommentFormBoolean

		vm.propertyNameToSortBy = '-vote_count'


		vm.$onInit = function() {
			console.log(vm.posts)
			console.log(vm.posts.length)
			// document.getElementById("loading-notification").style.display = "none";
			document.getElementById("new-post-button").style.display = "block";
			if(vm.posts.length > 0){
				document.getElementById("loading-notification").style.display = "none";
			}
		}

		function posts() {
			return postsService.posts
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
				content:post.newComment.body,
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

		function toggleShowCommentFormBoolean(post) {
			post.showCommentFormBoolean ? post.showCommentFormBoolean = false : post.showCommentFormBoolean = true
		}


		function searchTerm() {
			return searchTermService.searchTerm
		}
	}

})()