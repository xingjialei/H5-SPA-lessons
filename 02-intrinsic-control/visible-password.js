document.getElementById('spec').onmouseover = function(){
  if(document.getElementById('psd').value){
    var small = document.getElementById('psd');
    small.setAttribute('type','text');
  }
}
document.getElementById('spec').onmouseout = function(){
  var small = document.getElementById('psd');
  small.setAttribute('type','password');
}
