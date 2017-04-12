(function() {
	'use strict'
	angular.module('app')
		.service('postsService', service)

	function service() {
		this.posts = [
				{
					author: "Steve",
					body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis architecto est, a suscipit quod minus consectetur enim nemo itaque laboriosam! Repudiandae cupiditate repellendus dolore magni reiciendis excepturi rem nam, mollitia.",
					image: "http://wikitravel.org/upload/shared//thumb/8/83/Saint_Mary_Lake_and_Wildgoose_Island_Glacier_National_Park_Montana.jpg/450px-Saint_Mary_Lake_and_Wildgoose_Island_Glacier_National_Park_Montana.jpg",
					title: "A Really Good Day",
					voteCount: 2,
					comments: ['nice post steve', 'interesting!'],
					showCommentFormBoolean: false,
					time: new Date("December 28, 1989 11:13:00")
				}, 
				{
					author: "Joe",
					body: "Lorem Joe dolor sit amet, consectetur adipisicing elit. Blanditiis architecto est, a suscipit quod minus consectetur enim nemo itaque laboriosam! Repudiandae cupiditate repellendus dolore magni reiciendis excepturi rem nam, mollitia.",
					image: "http://wikitravel.org/upload/shared//thumb/8/83/Saint_Mary_Lake_and_Wildgoose_Island_Glacier_National_Park_Montana.jpg/450px-Saint_Mary_Lake_and_Wildgoose_Island_Glacier_National_Park_Montana.jpg",
					title: "Joes Day",
					voteCount: 9,
					comments: ['joe, no one speaks latin'],
					showCommentFormBoolean: false,
					time: new Date("October 13, 2016 11:13:00")
				}
		]


		this.createPostService = createPostService

		function createPostService(newPost) {
			console.log('hitting createPost in postsService')
			newPost.voteCount=0
			newPost.comments=[]
			newPost.time = new Date()
			this.posts.push(newPost)
		}
	}
})()