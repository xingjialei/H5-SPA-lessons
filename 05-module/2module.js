var timerButton = function(config){
	var $btn = $('<input type="button">');
	$(config.container).append($btn);

	var time = config.tlength;
	var t;

	disableBtn();

	$btn.click(function(){
		$btn.trigger(timer-button-click);
	})
	function enableBtn(){
		$btn.val(config.title);
		$btn.removeAttr('disabled');
	}

	function disableBtn(){
		$btn.attr('disabled','disabled');
		$btn.val(config.title+time+'s');

		t = window.setInterval(function(){
			time = time - 1;
			if(time == 0){
				enableBtn();
				window.clearInterval(t);
				return;
			}

			$btn.val(config.title+time+'s');
		},1000);
	}
	return timerButton;
}



