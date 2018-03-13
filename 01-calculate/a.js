/*简单计算*/
function account(){
  var width = document.getElementById('rec__width').value;
  console.log(width);
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
