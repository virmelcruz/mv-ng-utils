'use strict';

angular.module('mvAngularUtilities')
.directive('overlay', function() {
	return {
		restrict: 'E',
		link: function(scope, element, attrs){
			element.attr('class','overlay');
			var head = element.attr('head') ? element.attr('head') :
						element.data('head') ? element.data('head') :
						false;
			var foot = element.attr('foot') ? element.attr('foot') :
						element.data('foot') ? element.data('foot') :
						false;
			if(head){
				element.prepend("<div class='head'>"+ head +"</div>");
			}
			if(foot){
				element.append("<div class='foot'>"+ foot +"</div>");
			}
			element.children().wrapAll("<div class='container'><div class='overlay-box'></div></div>");
		}
	}
});