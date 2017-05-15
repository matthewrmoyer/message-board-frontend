(function(){
	angular.module('app')
		.component('newPostForm', {
			controller: ('NewPostFormController', NewPostFormController),
			templateUrl: './app/new-post-form/new-post-form.html'
		})

		NewPostFormController.$inject = ['toggleFormService', 'postsService']

		function NewPostFormController(toggleFormService, postsService){
			const vm = this
			vm.showFormBoolean = showFormBoolean
			vm.createPost = createPost
			
			function showFormBoolean(){
				return toggleFormService.showForm
			}

			function createPost(){
				postsService.createPostService(vm.newPost)
				delete vm.newPost
				console.log(postsService.posts)
				toggleFormService.showForm=false
			}
		}
})()