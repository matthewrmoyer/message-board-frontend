(function() {
	'use strict'
	angular.module('app')
		.component('newPostButton', {
			controller: ('NewPostButtonController', NewPostButtonController),
			templateUrl: './app/new-post-button/new-post-button.html'
		})

		NewPostButtonController.$inject = ['toggleFormService']
		
		function NewPostButtonController(toggleFormService) {
			const vm = this
			vm.toggleForm = toggleForm



			function toggleForm() {
				//run to toggle showForm boolean
				toggleFormService.toggleForm()
			}
		}
})()