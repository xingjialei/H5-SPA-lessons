var pasText = function(config){
	var $pas = $('<input type="password">');
	$(config.container).append('<span>'+config.title+'：</span>');
	$(config.container).append($pas);
	var $eye = $('<img src="../images/eye-close.png">');
	$(config.container).append($eye);

	$eye.mouseover(function(){
		$pas.attr('type','text');
		$eye.attr('src','../images/eye.png');
	})
	$eye.mouseout(function(){
		$pas.attr('type','password');
		$eye.attr('src','../images/eye-close.png');
	})

}