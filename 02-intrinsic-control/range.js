console.log(document.getElementById('num').value);
document.getElementById('num').onmouseup = function(){
  console.log(document.getElementById('num').value);
  document.getElementById('number').innerHTML = document.getElementById('num').value;
}
