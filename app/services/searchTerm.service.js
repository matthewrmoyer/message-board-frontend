(function () {
	'use strict'
	angular.module('app')
		.service('searchTermService', service)

		function service(){
			this.searchTerm = ''
			 this.editSearchTerm = function(newSearchTerm){
				this.searchTerm=newSearchTerm
			}
		}
})()