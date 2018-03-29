$header = (function(){
	$headerDOM = $(''
		+'<div class="admin-app-header">'
			+'<div class="title">'
				+'<h1></h1>'
			+'</div>'
			+'<div class="account">'
				+'<div class="logo"></div>'
				+'<span>管理</span>'
				+'<i class="iconfont icon-arrowdown"></i>'
				+'<div class="submenu">'
					+'<i></i>'
					+'<span>注销</span>'
				+'</div>'
			+'</div>'
		+'</div>');

	var $title = $headerDOM.find('.title h1'),
	$logo = $headerDOM.find('.logo'),
	$account = $headerDOM.find('.account'),
	$menu = $headerDOM.find('.submenu'),
	$arrow = $headerDOM.find('.account span+i');

	$account.mouseover(function(){
		$menu.css('display','block');
		$account.css('color','black');
		$arrow.removeClass('icon-arrowdown');
		$arrow.addClass('icon-arrowup');
	})

	$account.mouseout(function(){
		$menu.css('display','none');
		$account.css('color','#999');
		$arrow.removeClass('icon-arrowup');
		$arrow.addClass('icon-arrowdown');
	})

	$title.html(app.config.headerTitle);
	$logo.css('background-image',app.config.headerLogo);

	function show(){
		$(app.config.appContainer).append($headerDOM);
	}

	return {show:show};
})();