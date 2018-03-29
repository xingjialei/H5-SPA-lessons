var $stage = (function(){
	function show(){
		$(app.config.appContainer).append('<div class="admin-app-stage"></div>')
	}

	/*
		本地路由改变，不刷新，即页面url后加#
		根据路由信息加载相应的Panel
		@param router 路由字符串
	*/
	function load(router){
		var panel = parsePanel(router);

	}

	/*
		将路由信息解析成 Panel 名称
		@param router 路由字符串
		@returns string Panel 名字
	*/
	function parsePanel(router){
		return '';
	}

	return {show:show};
})();