$(function(){
	//$login.show({'container':'#admin-app'});

	//$login.show('#admin-app');

	$login.show();

	window.onhashchange = function(){
		if(location.hash === '#/login'){
			$(app.config.appContainer).html('');
			$login.show();
		}

		if(location.hash === '#/app'){
			$(app.config.appContainer).html('');
			$header.show();
			$menu.show();
			//$stage.show();
			$footer.show();
		}
	}
});