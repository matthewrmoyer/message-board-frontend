(function(){
	'use strict';
	angular.module('app')
		.service('toggleFormService', service)

		function service(){
				this.showForm = false
				this.toggleForm = toggleFormService


				function toggleFormService(){
					console.log(this.showForm)
					//toggle showForm variable, which will be referenced in new-post-form.html via the new-post-form-controller
					return this.showForm ? this.showForm=false: this.showForm=true
				}
		}
})()