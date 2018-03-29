$(function(){
	//$login.show({'container':'#admin-app'});

	//$login.show('#admin-app');

	$header.show();

	$menu.show();

	$stage.show();

	$footer.show();

	window.onhashchange = function(){
		if(location.hash === '#/login') $login.show();
	}
});