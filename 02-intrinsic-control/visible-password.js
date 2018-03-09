document.getElementById('psd').onmouseover = function(){
  if(document.getElementById('psd').value){
    var small = document.getElementById('psd');
    small.setAttribute('type','text');
  }
}
document.getElementById('psd').onmouseout = function(){
  var small = document.getElementById('psd');
  small.setAttribute('type','password');
}
