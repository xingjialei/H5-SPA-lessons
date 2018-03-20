$(function(){
	var $btn = $('#main input');
	var time = 9;
	var t;

	disableBtn();

	$btn.click(function(){
		alert('hello');
	})
	function enableBtn(){
		$btn.val('同意');
		$btn.removeAttr('disabled');
	}

	function disableBtn(){
		$btn.attr('disabled','disabled')
		.val('同意('+time+'s)');

		t = window.setInterval(function(){
			time = time - 1;
			if(time == 0){
				enableBtn();
				window.clearInterval(t);
				return;
			}

			$btn.val('同意('+time+'s)');
		},1000);

	}
});