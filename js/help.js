


$(document).ready(function() {
	$(".fancybox").fancybox();
	
	$(".iframe").fancybox({
		'width'			: '75%',
		'height'		: '75%',
       		 'autoScale'     	: false,
       		 'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'type'			: 'iframe'
	});
});
