function account(){
  var width = document.getElementById('rec__width').value;
  var height = document.getElementById('rec__height').value;
  var aa = width * 2 + height * 2;
  var bb = width * height;
  document.getElementById('rec__area').value = bb;
  document.getElementById('rec__perimeter').value = aa;
}
