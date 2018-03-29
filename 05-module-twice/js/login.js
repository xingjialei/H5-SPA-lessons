var $login = (function(){
	var $loginDOM = $(''
	+'<div id="admin-app">'
		+'<div id="login">'
			+'<h1>集团后台登录</h1>'
			+'<form>'
				+'<label>用户名</label>'
				+'<input type="text"></input><br/>'
				+'<label>密　码</label>'
				+'<input type="password"></input><br/>'
				+'<label>验证码</label>'
				+'<input type="text"></input><br/>'
				+'<input type="submit"></input>'
			+'</form>'
		+'</div>'
	+'</div>');
	/*function show(config){
		$(config.container).html(html);
	}*/

	//var $form = $loginDOM.find('form input[type="submit"]');
	var $form = $loginDOM.find('form');
	function validate(){
		return true;
	}

	console.log($form);

	$form.submit(function(e){
		e.preventDefault();
		if(validate()){
			location.hash = '#/app';
		}
		location.href = "#/app";
	})

	/*$form.click(function(e){
		console.log('111');
		location.hash = '#/app';
	})*/

	function show(){
		$(app.config.appContainer).html('');
		$(app.config.appContainer).html($loginDOM);
	}

	return{show:show};
})();