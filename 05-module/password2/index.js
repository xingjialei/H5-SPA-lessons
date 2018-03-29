$(function(){
	var $btnAddPwd = $('#add'),
		$btnGetPwd = $('#get'),
		pwdArray = [];

	$btnAddPwd.click(function(){
		var pwd = new PasswordBox({'container':'div#main'});
		pwdArray.push(pwd);
		$btnGetPwd.removeAttr('disabled','');
	});

	$btnGetPwd.click(function(){
		pwdArray.forEach(function(pwd){
			alert(pwd.getPwd());
		});
	});
})