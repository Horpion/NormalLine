$('.registration__button').on('click',function(){
	$('.registration__form').toggle(20);
});

	$(document).mouseup(function (e){ 
		var div = $(".registration__form");
		if (!div.is(e.target) && div.has(e.target).length === 0) { 
			div.hide();
	}
});

$(".comments__add").on('click',function(){
	$(".comments__form").toggle(300);
});