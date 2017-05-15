(function(argument) {
	'use strict'
	angular.module('app')
		.component('searchbar', {
			controller: ('SearchBarController', SearchBarController),
			templateUrl: './app/searchbar/searchbar.html'
		})


	SearchBarController.$inject = ['searchTermService']

	function SearchBarController(searchTermService) {
		const vm = this
		vm.setSearchTerm = setSearchTerm
		vm.newSearch = ""


		function setSearchTerm() {
			searchTermService.editSearchTerm(vm.newSearch)
		}
	}



})()