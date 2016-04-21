(function(){
	var app=angular.module('store-books',[]);
	app.directive('bookDetail',function(){
	return {
		restrict : 'E',
		templateUrl : 'book_detail.html'
	};
	});
	app.directive('bookPanels',function(){
		return {
			restrict : 'E',
			templateUrl: 'book-panels.html'
		};
	});

})();