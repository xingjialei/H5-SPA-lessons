$(function(){
	var $pwd = $('#main input[type="password"]'),
		$pwdText = $('#main input[type="text"]'),
		$eye = $('#main div');

	$pwd.on('input',function(e){
		$pwdText.val($pwd.val());
	});

	$eye.mouseout(function(){
		$pwdText.css('z-index','-10');
		/*$eye.attr('src','../images/eye-close.png');*/
	});

	$eye.mouseover(function(){
		$pwdText.css('z-index','10');
		/*$eye.attr('src','../images/eye.png');*/
	});
})