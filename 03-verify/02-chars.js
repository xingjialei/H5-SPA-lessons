/*简单计算*/
function account(){
  var width = document.getElementById('rec__width').value; 
  var height = document.getElementById('rec__height').value;
  var aa = width * 2 + height * 2;
  var bb = width * height;
  
  document.getElementById('rec__area').value = parseFloat((bb).toFixed(10));
  document.getElementById('rec__perimeter').value = parseFloat((aa).toFixed(10));
}

/*页面加载完成后自动获得焦点*/
window.onload = function(){
  document.getElementById('rec__width').focus();
}

/*按键时判断字符*/
function func1(str){
  preventStr(str);
}
function func2(str){
  testStr(str);
}

/*字符判断*/
function preventStr(e){
  if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+\[\]{}|;:'",<>/?\\]/.test(e.value)){
    e.replace('');
  }
}

/*表单验证*/
function testStr(str){
  if(str.value == ''){
    document.getElementById('one').innerHTML='不能为空';
  }
  if(str.value < 0){
    document.getElementById('one').innerHTML='必须大于零';
  }
}


