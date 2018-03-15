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

/*字段级验证*/
  document.getElementById('rec__width').onblur = function(){
    document.getElementById('one').innerHTML='';
    if(document.getElementById('rec__width').value == ''){
      document.getElementById('one').innerHTML = '宽度不能为空!';
    }else{
      var str = document.getElementById('rec__width').value;
      var reg = /^[0-9]+.?[0-9]*$/;
      
      if(!reg.test(str)){
        document.getElementById('one').innerHTML = '宽度必须是整数!';
      }
    }
  };

  document.getElementById('rec__height').onblur = function(){
    document.getElementById('two').innerHTML='';
    if(document.getElementById('rec__height').value == ''){
      document.getElementById('two').innerHTML = '宽度不能为空!';
    }else{
      var str = document.getElementById('rec__height').value;
      var reg = /^[0-9]+.?[0-9]*$/;
      
      if(!reg.test(str)){
        document.getElementById('two').innerHTML = '宽度必须是整数!';
      }
    }
  };

};
