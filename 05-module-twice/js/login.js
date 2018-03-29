var $login = (function(){
	var html = ''
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
	+'</div>';
	/*function show(config){
		$(config.container).html(html);
	}*/

	function show(){
		$(app.config.appContainer).html('');
		$(app.config.appContainer).html(html);
	}

	return{show:show};
})();